import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './address-form.styles.scss';
import VidFormInput from '../form-input/form-input.component';
import CustomButton from '../../general/custom-button/custom-button.component';

const AddressForm = ({ submitForm, address }) => {
  const { city, zipCode, street, firstName, lastName, phoneNumber } = address;
  const formik = useFormik({
    initialValues: {
      city: city === null ? '' : city,
      zipCode: zipCode === null ? '' : zipCode,
      street: street === null ? '' : street,
      firstName: firstName === null ? '' : firstName,
      lastName: lastName === null ? '' : lastName,
      phoneNumber: phoneNumber === null ? '' : phoneNumber
    },
    validationSchema: Yup.object({
      city: Yup.string()
        .required('City is required'),
      zipCode: Yup.string()
        .required('Zip code is required')
        .matches('^[0-9]{2}-[0-9]{3}$', 'Invalid zip code (example 33-333)'),
      street: Yup.string()
        .required('Street is required'),
      firstName: Yup.string()
        .required('Fist name is required'),
      lastName: Yup.string()
        .required('Last name is required'),
      phoneNumber: Yup.string()
        .required('Phone number is required')
        .matches('^[0-9]{9}$', 'Invalid phone number')
    }),
    onSubmit: values => submitForm(values)
  });
  
  return (
    <div className='address-form'>
      <form onSubmit={ formik.handleSubmit }>
        <VidFormInput formik={ formik } name='city' label='City' />
        <VidFormInput formik={ formik } name='zipCode' label='Zip Code' />
        <VidFormInput formik={ formik } name='street' label='Street' />
        <VidFormInput formik={ formik } name='firstName' label='First Name' />
        <VidFormInput formik={ formik } name='lastName' label='Last Name' />
        <VidFormInput formik={ formik } name='phoneNumber' label='Phone Number' /> 
        <CustomButton className='w100' type='submit' label='SAVE' />
      </form>
    </div>
  )
}

export default AddressForm;