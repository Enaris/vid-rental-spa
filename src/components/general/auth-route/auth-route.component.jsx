import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectUserRoles } from '../../../redux/auth/auth.selectors'; 
import { selectLoading } from '../../../redux/auth/auth.selectors'; 

const AuthRoute = ({ 
  requiredRole, 
  userRoles, 
  redirectTo, 
  Component, 
  loading,
  ...otherProps }) => {
  return (
    <Route 
      { ...otherProps }
      render={() => 
        loading 
        ? <p> Loading from auth route </p>
        : userRoles && userRoles.some(r => r.name === requiredRole)
          ? <Component />
          : <Redirect to={ redirectTo } />
      }
    />
  )
}

const mapStateToProps = createStructuredSelector({
  userRoles: selectUserRoles,
  loading: selectLoading
});

export default connect(mapStateToProps)(AuthRoute);