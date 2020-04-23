import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

import './admin-sidebar.styles.scss';

const AdminSideBar = () => {
  const { url } = useRouteMatch();
  return (
    <nav className='sidebar'>
      <NavLink exact className='sidebar-link' activeClassName='sidebar-link-active' to={`${url}/employees`}> EMPLOYEES </NavLink>
      <NavLink exact className='sidebar-link' activeClassName='sidebar-link-active' to={`${url}/employees/add`}> ADD EMPLOYEE </NavLink>
      <NavLink exact className='sidebar-link' activeClassName='sidebar-link-active' to={`${url}/orders`}> ORDERS </NavLink>
    </nav>
  )
};

export default AdminSideBar;