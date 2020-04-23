import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';

import Header from './components/general/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import RegisterPage from './pages/register-page/register-page.component';
import LoginPage from './pages/login-page/login-page.component';
import BrowseCartridgesPage from './pages/browse-cartridges/browse-cartridges.component';
import CartridgeDetails from './pages/cartridge-details/cartridge-details.component.jsx';
import AdminPage from './pages/admin-page/admin-page.component';
import EmployeePage from './pages/employee-page/employee-page.component';

import { checkTokenStart } from './redux/auth/auth.actions';
import AuthRoute from './components/general/auth-route/auth-route.component';
import NonAuthRoute from './components/general/non-auth-route/non-auth-route.component';
import UserRoles from './redux/api/api.user-roles';

function App({ checkTokenStart }) {
  useEffect(() => {
    const token = sessionStorage.getItem('userToken');
    checkTokenStart(token);
  }, [checkTokenStart]);

  return (
    <div className="App">
      <Header />
      <div className='page-container'>
        <Switch >
          <NonAuthRoute exact 
            path='/login' 
            redirectTo='/'
            Component={ LoginPage } 
            />
          <NonAuthRoute exact 
            path='/register' 
            redirectTo='/'
            Component={ RegisterPage } 
            />
          <Route exact path='/cartridges/:id' component={ CartridgeDetails } />
          <Route exact path='/cartridges' component={ BrowseCartridgesPage } />
          <Route exact path='/' component={ Homepage } />
          <AuthRoute 
            path='/admin' 
            requiredRole={ UserRoles.Admin }
            redirectTo='/'
            Component={ AdminPage } 
          />
          <AuthRoute 
            path='/employee' 
            requiredRole={ UserRoles.Employee }
            redirectTo='/'
            Component={ EmployeePage } 
          />
        </Switch>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  checkTokenStart: token => dispatch(checkTokenStart(token))
});

export default connect(null, mapDispatchToProps)(App);
