import { createSelector } from 'reselect';

const selectEmployee = state => state.employee;

export const selectEmployees = createSelector(
  [selectEmployee],
  employee => employee.employees
);

export const selectEmployeesLoading = createSelector(
  [selectEmployee],
  employee => employee.employeesLoading
);

export const selectRentals = createSelector(
  [selectEmployee],
  employee => employee.rentals
);

export const selectRentalsLoading = createSelector(
  [selectEmployee],
  employee => employee.rentalsLoading
);