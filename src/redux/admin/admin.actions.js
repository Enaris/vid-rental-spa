import AdminActionTypes from './admin.types';

export const fireEmployeeStart = employeeId => ({
  type: AdminActionTypes.FIRE_EMPLOYEE_START,
  payload: employeeId
});

export const fireEmployeeSuccess = () => ({
  type: AdminActionTypes.FIRE_EMPLOYEE_SUCCESS,
});

export const fireEmployeeFailure = errors => ({
  type: AdminActionTypes.FIRE_EMPLOYEE_FAILURE,
  payload: errors
});

export const activateEmployeeStart = employeeId => ({
  type: AdminActionTypes.ACTIVATE_EMPLOYEE_START,
  payload: employeeId
});

export const activateEmployeeSuccess = () => ({
  type: AdminActionTypes.ACTIVATE_EMPLOYEE_SUCCESS,
});

export const activateEmployeeFailure = errors => ({
  type: AdminActionTypes.ACTIVATE_EMPLOYEE_FAILURE,
  payload: errors
});