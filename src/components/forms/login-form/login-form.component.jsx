import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import './login-form.styles.scss';

import VidFormInput from '../form-input/form-input.component';
import CustomButton from '../../general/custom-button/custom-button.component';
import { loginStart } from '../../../redux/auth/auth.actions';

const LoginForm = ({ loginStart }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
    }),
    onSubmit: values => loginStart(values)
  });

  return (
    <div className='login-form-contanier'>
      <h2 className='login-title'> LOG IN </h2>
      <div className='login-form'> 
        <form onSubmit={ formik.handleSubmit } >
          <VidFormInput formik={ formik } name='email' label='Email' />
          <VidFormInput formik={ formik } name='password' label='Password' type='password' />
          <CustomButton className='w100' type='submit' label='LOGIN' />
        </form>
      </div>
      <div className='register-link-container'>
        <Link to='/register' className='register-link'> Or create new account </Link>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loginStart: loginData => dispatch(loginStart(loginData))
}) 

export default connect(null, mapDispatchToProps)(LoginForm);