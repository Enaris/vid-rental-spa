import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './cartridge-edit.styles.scss';
import VidFormInput from '../../../forms/form-input/form-input.component';
import CustomButton from '../../../general/custom-button/custom-button.component';
import { updateCartridgeStart } from '../../../../redux/cartridge/cartridge.actions';

const CartridgeEdit = ({
  updateCartridge, 
  cartridge: { 
    id,    
    movieTitle, 
    movieId, 
    copiesAvaible, 
    language, 
    copiesUnavaible, 
    rentPrice, 
    daysToReturn,
    maxCopiesToMakeAvaible,
    maxCopiesToMakeUnavaible,
    copiesRented
   }
}) => {
  const formik = useFormik({
    initialValues: {
      copiesToAddAva: 0,
      copiesToAddUnava: 0, 
      copiesToMakeAva: 0,
      copiesToMakeUnava: 0,
      daysToReturn: daysToReturn,
      rentPrice: +rentPrice, 
      language: language
    },
    validationSchema: Yup.object({
      copiesToAddAva: Yup.number()
        .min(0, 'Cannot add negative number of copies')
        .integer('Enter valid number'),
      copiesToAddUnava: Yup.number()
        .min(0, 'Cannot add negative number of copies')
        .integer('Enter valid number'),
      copiesToMakeAva: Yup.number()
        .min(0, 'This number cannot be negative')
        .max(maxCopiesToMakeAvaible, 'Cannot make more copies avaible')
        .integer('Enter valid number'),
      copiesToMakeUnava: Yup.number()
        .min(0, 'This number cannot be negative')
        .max(maxCopiesToMakeUnavaible , 'Cannot make more copies unavaible')
        .integer('Enter valid number'),        
      daysToReturn: Yup.number()
        .min(1, 'Days to return cannot be less than 1')
        .integer('Enter valid number'),
      rentPrice: Yup.number()
        .min(0, 'Rent Price cannot be less than 0'),
      language: Yup.string()
        .required('Language is required')
    }),
    onSubmit: values => { console.log(id); console.log(values); updateCartridge(id, values);}
  });
  
  return (
    <div className='cartridge-edit'>
      Movie: <Link to={`/employee/movies/${movieId}/edit`}>{ movieTitle }</Link>
      <form onSubmit={ formik.handleSubmit } >
        { `Total Copies: ${copiesAvaible + copiesUnavaible} Avaible: ${copiesAvaible} Unavaible: ${copiesUnavaible} (rented: ${copiesRented})` }
        <VidFormInput 
          formik={ formik } 
          type='number' 
          name='copiesToMakeAva' 
          step={ 1 } 
          label={`Copies to make avaible (max: ${maxCopiesToMakeAvaible})`} 
        />
        <VidFormInput 
          formik={ formik } 
          type='number' 
          name='copiesToMakeUnava' 
          step={ 1 } 
          label={`Copies to make unavaible (max: ${maxCopiesToMakeUnavaible})`}           
        />
        <VidFormInput formik={ formik } type='number' name='copiesToAddAva' step={ 1 } label='Copies to add (avaible)' />
        <VidFormInput formik={ formik } type='number' name='copiesToAddUnava' step={ 1 } label='Copies to add (unavaible)' />
        Total Added: { `${formik.values.copiesToAddAva + formik.values.copiesToAddUnava}` }
        <VidFormInput formik={ formik } type='number' name='daysToReturn' step={ 1 } label='Days To Return' />
        <VidFormInput formik={ formik } type='number' name='rentPrice' step={ 0.01 } label='Rent Price' />
        <VidFormInput formik={ formik } name='language' label='Language' />
        <CustomButton type='submit' label='SAVE' className='w100' />
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateCartridge: (cartridgeId, cartridge) => dispatch(updateCartridgeStart({cartridgeId, data: cartridge}))
});

export default connect(null, mapDispatchToProps)(CartridgeEdit)