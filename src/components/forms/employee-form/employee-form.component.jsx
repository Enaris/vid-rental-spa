import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import './employee-form.styles.scss';

import VidFormInput from '../form-input/form-input.component';
import CustomButton from '../../general/custom-button/custom-button.component';
import { addEmployeeStart } from '../../../redux/employee/employee.actions'; 
import { selectEmployeeErrors } from '../../../redux/employee/employee.selectors';
import { createStructuredSelector } from 'reselect';

const EmployeeForm = ({ addEmployeeStart, errors }) => {

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
    onSubmit: values => addEmployeeStart(values)
  });

  return (
    <div className='employee-form-contanier'>
      <h2> ADD EMPLOYEE </h2>
      {
        errors && errors.Email && <div className='error-text'>{ errors.Email[0] }</div>
      }
      <form onSubmit={ formik.handleSubmit } className='employee-form' id='employee-form'>
        <VidFormInput formik={ formik } name='email' label='Email' />
        <VidFormInput formik={ formik } name='password' label='Password' type='password' />
        <VidFormInput formik={ formik } name='confirmPassword' label='Confirm Password' type='password' />
        <VidFormInput formik={ formik } name='firstName' label='First Name' />
        <VidFormInput formik={ formik } name='lastName' label='Last Name' />
        <VidFormInput formik={ formik } name='phoneNumber' label='Phone Number' />        
      </form>
      <CustomButton 
        className='w100' 
        type='submit' 
        label='ADD EMPLOYEE'
        form='employee-form' 
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addEmployeeStart: employee => dispatch(addEmployeeStart(employee))
});

const mapStateToProps = createStructuredSelector({
  errors: selectEmployeeErrors
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);