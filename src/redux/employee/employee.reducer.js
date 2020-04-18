import employeeActionTypes from './employee.types';

const INITIAL_STATE = {
  employees: [],
  errors: null,
  employeesLoading: false
}

const EmployeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case employeeActionTypes.FETCH_EMPLOYEES_START: 
      return {
        ...state,
        employeesLoading: true
      }
    case employeeActionTypes.FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        errors: null,
        employees: action.payload,
        employeesLoading: false
      }
    case employeeActionTypes.FETCH_EMPLOYEES_FAILURE:
      return {
        ...state, 
        errors: action.payload,
        employees: null,
        employeesLoading: false
      }
    default:
      return state;
  }
}

export default EmployeeReducer;