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

import { checkTokenStart } from './redux/auth/auth.actions';

function App({ checkTokenStart }) {
  useEffect(() => {
    checkTokenStart(sessionStorage.getItem('userToken'))
  }, [checkTokenStart]);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/login' component={ LoginPage } />
        <Route exact path='/register' component={ RegisterPage } />
        <Route exact path='/cartridges/:id' component={ CartridgeDetails } />
        <Route exact path='/cartridges' component={ BrowseCartridgesPage } />
        <Route exact path='/' component={ Homepage } />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  checkTokenStart: token => dispatch(checkTokenStart(token))
});

export default connect(null, mapDispatchToProps)(App);
