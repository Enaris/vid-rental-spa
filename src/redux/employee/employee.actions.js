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