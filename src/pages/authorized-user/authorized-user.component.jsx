import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';

import './authorized-user.styles.scss';
import AuthRoute from '../../components/general/auth-route/auth-route.component';
import LeftPanel from '../../components/general/left-panel/left-panel.component';
import UserRoles from '../../redux/api/api.user-roles';

const AuthorizedUser = () => {
  const { path } = useRouteMatch();
  return (
    <div className='authorized-user spa-page'>
      <LeftPanel>
        Its empty
      </LeftPanel>
        <div className='content-container'>
          <Switch>
            <AuthRoute exact 
              path={`${path}`}
              requiredRole={ UserRoles.User }
              redirectTo='/'
              Component={() => <div> Hi User </div>}
            />
          </Switch>
        </div>
    </div>
  )
}

export default AuthorizedUser;