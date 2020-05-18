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
});

export const addEmployeeFailure = errors => ({
  type: employeeActionTypes.ADD_EMPLOYEE_FAILURE,
  payload: errors
});

export const fetchAllRentalsStart = () => ({
  type: employeeActionTypes.FETCH_ALL_RENTALS_START
});

export const fetchAllRentalsSuccess = rentals => ({
  type: employeeActionTypes.FETCH_ALL_RENTALS_SUCCESS,
  payload: rentals
});

export const fetchAllRentalsFailure = errors => ({
  type: employeeActionTypes.FETCH_ALL_RENTALS_FAILURE,
  payload: errors
});

export const updateRentalReturnStart = data => ({
  type: employeeActionTypes.UPDATE_RENTAL_RETURN_START,
  payload: data
});

export const updateRentalReturnSuccess = () => ({
  type: employeeActionTypes.UPDATE_RENTAL_RETURN_SUCCESS,
});

export const updateRentalReturnFailure = errors => ({
  type: employeeActionTypes.UPDATE_RENTAL_RETURN_FAILURE,
  payload: errors
});