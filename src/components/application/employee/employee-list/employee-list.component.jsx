import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './employee-list.styles.scss';
import { selectEmployees } from '../../../../redux/employee/employee.selectors';
import CustomButton from '../../../general/custom-button/custom-button.component';
import { fireEmployeeStart, activateEmployeeStart } from '../../../../redux/admin/admin.actions';

const EmployeeList = ({ employees, fireEmployee, activateEmployee }) => {

  const OptBttn = ({ active, id }) => {
    const label = active ? 'FIRE' : 'REACTIVATE';
    const btnAction = empId => active ? fireEmployee(empId) : activateEmployee(empId);

    return (
      <CustomButton 
        label={ label }
        onClick={ () => btnAction(id) }
      />
    )
  }

  return (
    <div className='employee-table'>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Active</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
        {
          employees.map(e => <tr key={ e.userId }>
              <td>{ e.firstName }</td>
              <td>{ e.lastName }</td>
              <td>{ e.email }</td>
              <td>{ e.isActive ? 'Active' : 'Deactivate' }</td>
              <td><OptBttn active={ e.isActive } id={ e.employeeId } /></td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  employees: selectEmployees
});

const mapDispatchToProps = dispatch => ({
  fireEmployee: employeeId => dispatch(fireEmployeeStart(employeeId)),
  activateEmployee: employeeId => dispatch(activateEmployeeStart(employeeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);