import React from 'react';

import './register-page.styles.scss';

import RegisterForm from '../../components/forms/register-form/register-form.component';

const RegisterPage = () => (
  <div className='content-container'>
    <div className='register-page'>
      <div className='small-content-container'>
        <RegisterForm />
      </div>
    </div>
  </div>
)

export default RegisterPage;