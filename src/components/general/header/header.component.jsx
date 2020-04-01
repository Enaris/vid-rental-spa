import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.syles.scss';

const Header = () => (
  <nav className='header'>
    <NavLink exact className='header-link' activeClassName='header-link-active' to='/'> HOME </NavLink>
    <NavLink exact className='header-link' activeClassName='header-link-active' to='/cartridges'> BROWSE </NavLink>
    <NavLink exact className='header-link' activeClassName='header-link-active' to='/login'> LOGIN </NavLink>
  </nav>
);

export default Header;