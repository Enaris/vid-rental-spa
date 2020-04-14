import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectUserRoles } from '../../../redux/auth/auth.selectors'; 

const AuthRoute = ({ 
  requiredRole, 
  userRoles, 
  redirectTo, 
  Component, 
  ...otherProps }) => {
  return (
    <Route 
      { ...otherProps }
      render={(props) => 
        userRoles && userRoles.some(r => r.name === requiredRole) 
        ? <Component { ...props } /> 
        : <Redirect to={ redirectTo } />
      }
    />
  )
}

const mapStateToProps = createStructuredSelector({
  userRoles: selectUserRoles
});

export default connect(mapStateToProps)(AuthRoute);