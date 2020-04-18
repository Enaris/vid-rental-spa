import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import EmployeeList from '../../../components/application/employee/employee-list/employee-list.component';
import { fetchEmployeesStart } from '../../../redux/employee/employee.actions';
import './employee-list-page.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectEmployeesLoading } from '../../../redux/employee/employee.selectors';

const EmployeeListPage = ({ fetchEmployeesStart, employeesLoading }) => {
  useEffect(() => {
    fetchEmployeesStart()
  }, [fetchEmployeesStart]);

  return (
    <div className='employee-list-page'>
      { !employeesLoading && <EmployeeList /> }
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchEmployeesStart: () => dispatch(fetchEmployeesStart())
});

const mapStateTopProps = createStructuredSelector({
  employeesLoading: selectEmployeesLoading
});

export default connect(mapStateTopProps, mapDispatchToProps)(EmployeeListPage);