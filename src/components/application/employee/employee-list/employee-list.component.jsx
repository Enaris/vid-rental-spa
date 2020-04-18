import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './employee-list.styles.scss';
import { selectEmployees } from '../../../../redux/employee/employee.selectors';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
        {
          employees.map(e => <tr key={ e.userId }>
              <td>{ e.firstName }</td>
              <td>{ e.lastName }</td>
              <td>{ e.email }</td>
              <td>{ e.isActive ? 'ok' : 'no ok' }</td>
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

export default connect(mapStateToProps)(EmployeeList);