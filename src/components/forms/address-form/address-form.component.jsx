import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './address-form.styles.scss';
import VidFormInput from '../form-input/form-input.component';
import CustomButton from '../../general/custom-button/custom-button.component';

const AddressForm = ({ submitForm, address }) => {
  const { city, zipCode, street } = address;
  const formik = useFormik({
    initialValues: {
      city: city === null ? '' : city,
      zipCode: zipCode === null ? '' : zipCode,
      street: street === null ? '' : street
    },
    validationSchema: Yup.object({
      city: Yup.string()
        .required('City is required'),
      zipCode: Yup.string()
        .required('Zip code is required'),
      street: Yup.string()
        .required('Street is required')
    }),
    onSubmit: values => submitForm(values)
  });
  
  return (
    <div className='address-form'>
      <form onSubmit={ formik.handleSubmit }>
        <VidFormInput formik={ formik } name='city' label='City' />
        <VidFormInput formik={ formik } name='zipCode' label='Zip Code' />
        <VidFormInput formik={ formik } name='street' label='Street' />
        <CustomButton className='w100' type='submit' label='SAVE' />
      </form>
    </div>
  )
}

export default AddressForm;