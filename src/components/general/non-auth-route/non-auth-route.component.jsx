import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../../redux/auth/auth.selectors'; 

const NonAuthRoute = ({ 
  user, 
  redirectTo, 
  Component, 
  ...otherProps }) => {

  return (
    <Route 
      { ...otherProps }
      render={() => 
        !user 
        ? <Component /> 
        : <Redirect to={ redirectTo } />
      }
    />
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

export default connect(mapStateToProps)(NonAuthRoute);