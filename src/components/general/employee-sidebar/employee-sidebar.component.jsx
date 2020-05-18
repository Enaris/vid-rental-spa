import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

import './employee-sidebar.styles.scss';

const EmployeeSideBar = () => {
  const { url } = useRouteMatch();
  return (
    <nav className='sidebar'>
      <NavLink exact className='sidebar-link' activeClassName='sidebar-link-active' to={`${url}/movies`}> MOVIES </NavLink>
      <NavLink exact className='sidebar-link' activeClassName='sidebar-link-active' to={`${url}/movies/add`}> ADD MOVIE </NavLink>
      <NavLink exact className='sidebar-link' activeClassName='sidebar-link-active' to={`${url}/cartridges`}> CARTRIDGES </NavLink>
      <NavLink exact className='sidebar-link' activeClassName='sidebar-link-active' to={`${url}/cartridges/add`}> ADD CARTRIDGE </NavLink>
      <NavLink exact className='sidebar-link' activeClassName='sidebar-link-active' to={`${url}/rentals`}> RENTALS </NavLink>
    </nav>
  )
};

export default EmployeeSideBar;