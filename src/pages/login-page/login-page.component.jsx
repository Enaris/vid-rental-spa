import React from 'react';

import './login-page.styles.scss';

import LoginForm from '../../components/forms/login-form/login-form.component';

const LoginPage = () => (
  <div className='content-container'>
    <div className='login-page'>
      <div className='small-content-container'>
        <LoginForm />
      </div>
    </div>
  </div>
)

export default LoginPage;