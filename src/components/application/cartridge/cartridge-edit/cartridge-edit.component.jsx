import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import './cartridge-edit.styles.scss';
import VidFormInput from '../../../forms/form-input/form-input.component';
import CustomButton from '../../../general/custom-button/custom-button.component';

const CartridgeEdit = ({ 
  cartridge: { movieTitle, movieId, copiesAvaible, language, copiesUnavaible, rentPrice, daysToReturn }
}) => {
  const formik = useFormik({
    initialValues: {
      copiesAvaible: +copiesAvaible,
      copiesUnavaible: +copiesUnavaible,
      daysToReturn: daysToReturn,
      rentPrice: +rentPrice, 
      language: language
    },
    validationSchema: Yup.object({
      copiesAvaible: Yup.number()
        .min(0, 'Avaible Amount cannot be less than 0')
        .integer('Enter valid number'),
      copiesUnavaible: Yup.number()
        .min(0, 'Unavaible Amount cannot be less than 0')
        .integer('Enter valid number'),
      daysToReturn: Yup.number()
        .min(1, 'Days to return cannot be less than 1')
        .integer('Enter valid number'),
      rentPrice: Yup.number()
        .min(0, 'Rent Price cannot be less than 0'),
      language: Yup.string()
        .required('Language is required')
    }),
    onSubmit: values => console.log(values)
  });
  
  return (
    <div className='cartridge-edit'>
      Movie: <Link to={`/employee/movies/${movieId}/edit`}>{ movieTitle }</Link>
      <form onSubmit={ formik.handleSubmit } >
        <VidFormInput formik={ formik } type='number' name='copiesAvaible' step={ 1 } label='Copies Avaible' />
        <VidFormInput formik={ formik } type='number' name='copiesUnavaible' step={ 1 } label='Copies Unavaible' />
        Total Copies: { +formik.values.copiesAvaible + +formik.values.copiesUnavaible }
        <VidFormInput formik={ formik } type='number' name='daysToReturn' step={ 1 } label='Days To Return' />
        <VidFormInput formik={ formik } type='number' name='rentPrice' step={ 0.01 } label='Rent Price' />
        <VidFormInput formik={ formik } name='language' label='Language' />
        <CustomButton type='submit' label='SAVE' className='w100' />
      </form>
    </div>
  )
}

export default CartridgeEdit