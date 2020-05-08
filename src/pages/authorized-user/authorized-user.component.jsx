import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';

import './authorized-user.styles.scss';
import AuthRoute from '../../components/general/auth-route/auth-route.component';
import LeftPanel from '../../components/general/left-panel/left-panel.component';
import UserRoles from '../../redux/api/api.user-roles';
import UserSidebar from '../../components/general/user-sidebar/user-sidebar.component';
import UserAddressPage from './user-address-page/user-address-page.component';
import UserAddAddressPage from './user-address-add-page/user-address-add-page.component';

const AuthorizedUser = () => {
  const { path } = useRouteMatch();
  return (
    <div className='authorized-user spa-page'>
      <LeftPanel>
        <UserSidebar />
      </LeftPanel>
        <div className='content-container'>
          <Switch>
            <AuthRoute exact 
              path={`${path}`}
              requiredRole={ UserRoles.User }
              redirectTo='/'
              Component={() => <div> Hi User </div>}
            />
            <AuthRoute exact 
              path={`${path}/address/add`} 
              Component={ UserAddAddressPage } 
              requiredRole={ UserRoles.User }
              redirectTo='/'
            />
            <AuthRoute exact 
              path={`${path}/address`} 
              Component={ UserAddressPage } 
              requiredRole={ UserRoles.User }
              redirectTo='/'
            />
          </Switch>
        </div>
    </div>
  )
}

export default AuthorizedUser;