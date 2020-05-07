import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

import './user-sidebar.styles.scss';

const UserSidebar = () => {
  const { url } = useRouteMatch();
  return (
    <nav className='sidebar'>
      <NavLink exact className='sidebar-link' activeClassName='sidebar-link-active' to={`${url}/address`}> ADDRESS </NavLink>
      <NavLink exact className='sidebar-link' activeClassName='sidebar-link-active' to={`${url}/orders`}> ORDERS </NavLink>
    </nav>
  )
}

export default UserSidebar;