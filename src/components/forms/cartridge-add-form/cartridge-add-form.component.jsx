import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cartridge-add-form.styles.scss';
import VidFormInput from '../form-input/form-input.component';
import CustomButton from '../../general/custom-button/custom-button.component';
import VidFormSelect from '../vid-form-select/vid-form-select.component';
import { 
  fetchMovies4DropdownStart,
  addCartridgeStart 
} from '../../../redux/cartridge/cartridge.actions';
import { selectMovies4Dropdown, selectDropdownLoading } from '../../../redux/cartridge/cartridge.selectors';

const CartridgeAddForm = ({ 
  fetchDropdown, 
  dropdownMovies, 
  dropdownLoading,
  addCartridge }) => {

  useEffect(() => {
    fetchDropdown();
  }, [fetchDropdown])

  const formik = useFormik({
    initialValues: {
      movieId: '',
      avaibleAmount: 0,
      unavaibleAmount: 0,
      daysToReturn: 0,
      rentPrice: 0.0, 
      language: ''
    },
    validationSchema: Yup.object({
      movieId: Yup.string()
        .required('Movie is required'),
      avaibleAmount: Yup.number()
        .min(0, 'Avaible Amount cannot be less than 0')
        .integer('Enter valid number'),
      unavaibleAmount: Yup.number()
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
    onSubmit: values => addCartridge(values)
  });

  return (
    <div>
      {
        dropdownLoading 
        ? <div> Loading </div>
        : !dropdownLoading && !dropdownMovies.length
        ? <div> You need to add some movies first. </div>
        :
        <form onSubmit={ formik.handleSubmit }>
          <VidFormSelect 
            options={ dropdownMovies } 
            valueSelector={ m => m.id } 
            textSelector={ m => `${m.title}, ${m.year}` } 
            placeholder='Select movie'
            formik={ formik }
            label='Movie'
            name='movieId'
          />
          <VidFormInput name='avaibleAmount' label='Avaible Amount' type='number' formik={formik} step={1}/>
          <VidFormInput name='unavaibleAmount' label='Unavaible Amount' type='number' formik={formik} step={1}/>
          <VidFormInput name='daysToReturn' label='Days To Return' type='number' formik={formik} step={1}/>
          <VidFormInput name='rentPrice' label='Rent Price' type='number' formik={formik} step={0.01}/>
          <VidFormInput name='language' label='Language' formik={formik} />
          <CustomButton className='w100' label='SAVE' type='submit' />
        </form>
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  dropdownMovies: selectMovies4Dropdown,
  dropdownLoading: selectDropdownLoading
})

const mapDispatchToProps = dispatch => ({
  fetchDropdown: () => dispatch(fetchMovies4DropdownStart()),
  addCartridge: cartridge => dispatch(addCartridgeStart(cartridge))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartridgeAddForm);