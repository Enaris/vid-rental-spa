import React from 'react';
import { connect } from 'react-redux';

import './login-page.styles.scss';

import LoginForm from '../../components/forms/login-form/login-form.component';
import { createStructuredSelector } from 'reselect';
import { selectLoginErrors } from '../../redux/auth/auth.selectors';

const LoginPage = ({ loginErrors }) => (
  <div className='content-container'>
    <div className='login-page'>
      <div className='small-content-container'>
        {
          loginErrors && loginErrors.errors.Employee && <div className='error-text'>{ loginErrors.errors.Employee[0] }</div>
        }
        <LoginForm />
      </div>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  loginErrors: selectLoginErrors
});

export default connect(mapStateToProps)(LoginPage);