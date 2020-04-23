import employeeActionTypes from './employee.types';

const INITIAL_STATE = {
  employees: [],
  errors: null,
  employeesLoading: false,
  employeeAdding: false
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
    case employeeActionTypes.ADD_EMPLOYEE_START: 
      return {
        ...state, 
        employeeAdding: true
      }
    case employeeActionTypes.ADD_EMPLOYEE_SUCCESS: 
      return {
        ...state, 
        employeeAdding: false
      }
    case employeeActionTypes.ADD_EMPLOYEE_FAILURE: 
      return {
        ...state, 
        employeeAdding: false,
        errors: action.payload
      }
    

    default:
      return state;
  }
}

export default EmployeeReducer;