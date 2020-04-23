import employeeActionTypes from './employee.types';

export const fetchEmployeesStart = () => ({
  type: employeeActionTypes.FETCH_EMPLOYEES_START
})

export const fetchEmployeesSuccess = employees => ({
  type: employeeActionTypes.FETCH_EMPLOYEES_SUCCESS,
  payload: employees
})

export const fetchEmployeesFailure = errors => ({
  type: employeeActionTypes.FETCH_EMPLOYEES_FAILURE,
  payload: errors
})

export const addEmployeeStart = employee => ({
  type: employeeActionTypes.ADD_EMPLOYEE_START,
  payload: employee
})

export const addEmployeeSuccess = employees => ({
  type: employeeActionTypes.ADD_EMPLOYEE_SUCCESS,
})

export const addEmployeeFailure = errors => ({
  type: employeeActionTypes.ADD_EMPLOYEE_FAILURE,
  payload: errors
})
