import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './register-form.styles.scss';

import VidFormInput from '../form-input/form-input.component';
import CustomButton from '../../general/custom-button/custom-button.component';
import AddressForm from '../address-form/address-form.component.jsx';

const RegisterForm = () => {
  const [addAddress, setAddAddress] = useState(false);
  const [addressAdded, setAddressAdded] = useState(false);

  const [savedAddress, setSavedAddress] = useState({
    city: '',
    zipCode: '',
    street: ''
  });

  const getAddAddressLabel = () => addressAdded 
    ? savedAddress.city + ', ' + savedAddress.street + ', ' + savedAddress.zipCode + ' (EDIT)' 
    : 'ADD DELIVERY ADDRESS (OPTIONAL)'; 

  const getRegisterBtnLabel = () => addAddress ? 'SAVE ADDRESS FIRST' : 'REGISTER';

  const addressFormHandleSubmit = ( values ) => {
    setSavedAddress(values); 
    setAddAddress(false); 
    setAddressAdded(true);
  }

  const handleCancelAddAddress = () => {
    setAddAddress(false);
  }

  const handleRemoveAddress = () => {
    setSavedAddress({ city: '', zipCode: '', street: '' });
    setAddressAdded(false);
    setAddAddress(false);
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(3, 'Password must be at least 3 characters long')
        .max(20, 'Password lenght cannot exceed 20 characters'),
      confirmPassword: Yup.string()
        .test('match-passwords', 'Passwords must match', value => formik.values.password === value)
    }),
    onSubmit: values => console.log(values)
  });

  return (
    <div className='register-form-contanier'>
      <form onSubmit={ formik.handleSubmit } className='register-form' id='register-form'>
        <VidFormInput formik={ formik } name='email' label='Email' />
        <VidFormInput formik={ formik } name='password' label='Password' type='password' />
        <VidFormInput formik={ formik } name='confirmPassword' label='Confirm Password' type='password' />        
      </form>
      <div className='add-address-register'>
        <div> ADDRESS (OPTIONAL) </div>
        {
          !addAddress &&
          <CustomButton 
            className='w100'
            label={ getAddAddressLabel() }
            onClick={ e => setAddAddress(true) }
          />
        }
        {
          addAddress && (
            <div>
              <div className='address-cancel-rmv-btns'> 
                <CustomButton 
                  label='CANCEL' 
                  onClick={ e => handleCancelAddAddress() }
                />
                {
                  addressAdded &&
                  <CustomButton
                  className='rmv-button'
                  label='REMOVE'
                  onClick={ e => handleRemoveAddress() }
                  />
                }
              </div>
              <AddressForm submitForm={ values => addressFormHandleSubmit(values) } address={ savedAddress } />
            </div>
          )
        }
      </div>
      <CustomButton 
        className='w100' 
        type='submit' 
        label={ getRegisterBtnLabel() }
        form='register-form' 
        disabled={ addAddress }
      />
    </div>
  )
}

export default RegisterForm;