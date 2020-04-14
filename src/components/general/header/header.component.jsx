import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './header.syles.scss';
import { selectCurrentUser } from '../../../redux/auth/auth.selectors';
import { logout } from '../../../redux/auth/auth.actions';

const Header = ({ user, logout }) => {
  
  return (
    <nav className='header'>
      <NavLink exact className='header-link' activeClassName='header-link-active' to='/'> HOME </NavLink>
      <NavLink exact className='header-link' activeClassName='header-link-active' to='/cartridges'> BROWSE </NavLink>
      <NavLink className='header-link' activeClassName='header-link-active' to='/admin' > ADMIN </NavLink>
      {
        user 
        ? <Link className='header-link' to='/' onClick={() => logout()}> LOGOUT </Link>
        : <NavLink exact className='header-link' activeClassName='header-link-active' to='/login'> LOGIN </NavLink>
      }
    </nav>
  )
}
;

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);