import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './admin-page.styles.scss';
import LeftPanel from '../../components/general/left-panel/left-panel.component';
import EmployeeListPage from './employee-list-page/employee-list-page.component';
import AddEmployeePage from './add-employee-page/add-employee-page.component';


const AdminPage = () => {

  return (
    <div className='admin-page'>
      <LeftPanel>

      </LeftPanel>
      <Switch>
        <Route exact path='/employees' component={ EmployeeListPage } />
        <Route exact path='/employees/add' component={ AddEmployeePage } />
      </Switch>
    </div>
  )
}

export default AdminPage;