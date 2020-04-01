import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/general/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import RegisterPage from './pages/register-page/register-page.component';
import LoginPage from './pages/login-page/login-page.component';
import BrowseCartridgesPage from './pages/browse-cartridges/browse-cartridges.component';
import CartridgeDetails from './pages/cartridge-details/cartridge-details.component.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={ Homepage } />
        <Route exact path='/login' component={ LoginPage } />
        <Route exact path='/register' component={ RegisterPage } />
        <Route exact path='/cartridges/:id' component={ CartridgeDetails } />
        <Route exact path='/cartridges' component={ BrowseCartridgesPage } />
      </Switch>
    </div>
  );
}

export default App;
