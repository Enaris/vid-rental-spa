import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../../redux/auth/auth.selectors'; 
import { selectLoading } from '../../../redux/auth/auth.selectors'; 

const NonAuthRoute = ({ 
  user, 
  redirectTo, 
  Component, 
  loading,
  ...otherProps }) => {

  return (
    <Route 
      { ...otherProps }
      render={() =>
        loading ?
        <p> Loading _______non Auth Route </p>
        : 
        !user 
        ? <Component /> 
        : <Redirect to={ redirectTo } />
      }
    />
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  loading: selectLoading
});

export default connect(mapStateToProps)(NonAuthRoute);