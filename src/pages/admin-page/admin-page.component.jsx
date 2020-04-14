import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import './admin-page.styles.scss';
import LeftPanel from '../../components/general/left-panel/left-panel.component';
import EmployeeListPage from './employee-list-page/employee-list-page.component';
import OrderHistoryPage from '../order-history-page/order-history-page.component';
import AdminSidebar from '../../components/general/admin-sidebar/admin-sidebar.component';
import UserRoles from '../../redux/api/api.user-roles';
import AuthRoute from '../../components/general/auth-route/auth-route.component';

const AdminPage = () => {
  const { path } = useRouteMatch();
  return (
    <div className='admin-page spa-page'>
      <LeftPanel>
        <AdminSidebar />
      </LeftPanel>
      <div className='content-container'>
        <Switch>
          <AuthRoute exact 
            path={`${path}/employees`} 
            Component={ EmployeeListPage } 
            requiredRole={ UserRoles.Admin }
            redirectTo='/'
          />
          <AuthRoute exact 
            path={`${path}/orders`} 
            Component={ OrderHistoryPage }
            requiredRole={ UserRoles.Admin }
            redirectTo='/'
          />
          <AuthRoute exact 
            path={`${path}`}
            requiredRole={ UserRoles.Admin }
            redirectTo='/'
            Component={() => <div> Hi Admin </div>}
          />
        </Switch>
      </div>
    </div>
  )
}

export default AdminPage;