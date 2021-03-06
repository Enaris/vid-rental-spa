import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';

import './employee-page.styles.scss';
import LeftPanel from '../../components/general/left-panel/left-panel.component';
import EmployeeSidebar from '../../components/general/employee-sidebar/employee-sidebar.component';
import MovieAddPage from '../movie/movie-add-page/movie-add-page.component';
import UserRoles from '../../redux/api/api.user-roles';
import EmployeeCartridgesPage from './employee-cartridges-page/employee-cartridges-page.component';
import EmployeeMoviesPage from './employee-movies-page/employee-movies-page.component';
import AuthRoute from '../../components/general/auth-route/auth-route.component';
import EmployeeRentalsPage from './employee-rentals-page/employee-rentals-page';
import MovieEditPage from '../movie/movie-edit-page/movie-edit-page.component';
import CartridgeAddPage from '../cartridge/cartridge-add-page/cartridge-add-page.component';
import CartridgeEditPage from '../cartridge/cartridge-edit-page/cartridge-edit-page.component';

const EmployeePage = () => {
  const { path } = useRouteMatch();
  return (
    <div className='employee-page spa-page'>
      <LeftPanel>
        <EmployeeSidebar />
      </LeftPanel>
        <div className='content-container'>
          <Switch>
            
            <AuthRoute exact 
              path={`${path}/movies/:id/edit`} 
              Component={ MovieEditPage } 
              requiredRole={ UserRoles.Employee }
              redirectTo='/'
            />

            <AuthRoute exact 
              path={`${path}/movies/add`} 
              Component={ MovieAddPage } 
              requiredRole={ UserRoles.Employee }
              redirectTo='/'
            />

            <AuthRoute exact 
              path={`${path}/movies`} 
              Component={ EmployeeMoviesPage } 
              requiredRole={ UserRoles.Employee }
              redirectTo='/'
            />

            <AuthRoute exact 
              path={`${path}/cartridges`} 
              Component={ EmployeeCartridgesPage } 
              requiredRole={ UserRoles.Employee }
              redirectTo='/'
            />
            <AuthRoute exact 
              path={`${path}/cartridges/:id/edit`} 
              Component={ CartridgeEditPage } 
              requiredRole={ UserRoles.Employee }
              redirectTo='/'
            />

            <AuthRoute exact 
              path={`${path}/cartridges/add`} 
              Component={ CartridgeAddPage } 
              requiredRole={ UserRoles.Employee }
              redirectTo='/'
            />
            <AuthRoute exact 
              path={`${path}/rentals`} 
              Component={ EmployeeRentalsPage }
              requiredRole={ UserRoles.Employee }
              redirectTo='/'
            />
            <AuthRoute exact 
              path={`${path}`}
              requiredRole={ UserRoles.Employee }
              redirectTo='/'
              Component={() => <div> Hi Employee </div>}
            />
          </Switch>
        </div>
    </div>
  )
}

export default EmployeePage;