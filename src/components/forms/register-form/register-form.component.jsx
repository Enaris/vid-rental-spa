import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import './register-form.styles.scss';

import VidFormInput from '../form-input/form-input.component';
import CustomButton from '../../general/custom-button/custom-button.component';
import AddressForm from '../address-form/address-form.component.jsx';
import AddressSummary from '../../application/address/address-summary/address-summary.component';

import { registerStart } from '../../../redux/auth/auth.actions';
import { 
  getAddAddressLabel, 
  getRegisterBtnLabel 
} from './register-form.utils';

import { selectLoading } from '../../../redux/auth/auth.selectors';

const RegisterForm = ({ registerStart, selectLoading }) => {
  const [addAddress, setAddAddress] = useState(false);
  const [addressAdded, setAddressAdded] = useState(false);

  const [savedAddress, setSavedAddress] = useState({
    city: '',
    zipCode: '',
    street: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

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

  const getRegisterData = () => {
    const registerData = ({
      ...formik.values,
      addressAdded,
      address: !addressAdded ? null : {
        ...savedAddress
      }
    })
    return registerData;
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phoneNumber: ''
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
        .test('match-passwords', 'Passwords must match', value => formik.values.password === value),
      firstName: Yup.string()
        .required('Fist name is required'),
      lastName: Yup.string()
        .required('Last name is required'),
      phoneNumber: Yup.string()
        .required('Phone number is required')
        .matches('^[0-9]{9}$', 'Invalid phone number')
    }),
    onSubmit: () => registerStart(getRegisterData())
  });

  return (
    <div className='register-form-contanier'>
      <h2> REGISTER </h2>
      <form onSubmit={ formik.handleSubmit } className='register-form' id='register-form'>
        <VidFormInput formik={ formik } name='email' label='Email' />
        <VidFormInput formik={ formik } name='password' label='Password' type='password' />
        <VidFormInput formik={ formik } name='confirmPassword' label='Confirm Password' type='password' />
        <VidFormInput formik={ formik } name='firstName' label='First Name' />
        <VidFormInput formik={ formik } name='lastName' label='Last Name' />
        <VidFormInput formik={ formik } name='phoneNumber' label='Phone Number' />        
      </form>
      <div className='add-address-register'>
        <div> ADDRESS (OPTIONAL) </div>
        {
          addressAdded &&
          <AddressSummary address={ savedAddress } />
        }
        {
          !addAddress &&
          <CustomButton 
            className='w100'
            label={ getAddAddressLabel(addressAdded) }
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
              <AddressForm 
                submitForm={ values => addressFormHandleSubmit(values) } 
                address={ addressAdded 
                  ? savedAddress 
                  : { firstName: formik.values.firstName, 
                      lastName: formik.values.lastName, 
                      phoneNumber: formik.values.phoneNumber,
                      zipCode: '',
                      street: '',
                      city: ''
                  }} 
              />
            </div>
          )
        }
      </div>
      <CustomButton 
        className='w100' 
        type='submit' 
        label={ getRegisterBtnLabel(addressAdded) }
        form='register-form' 
        disabled={ addAddress }
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  registerStart: registerData => dispatch(registerStart(registerData))
})

export default connect(null, mapDispatchToProps)(RegisterForm);