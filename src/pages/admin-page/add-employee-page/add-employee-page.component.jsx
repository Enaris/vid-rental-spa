import React from 'react';

import './add-employee-page.styles.scss';
import EmployeeForm from '../../../components/forms/employee-form/employee-form.component';

const AddEmployeePage = () => {

  return (
    <div className='add-employee-page'>
      <EmployeeForm />
    </div>
  )
}

export default AddEmployeePage;