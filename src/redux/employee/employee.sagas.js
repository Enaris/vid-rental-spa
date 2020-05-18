import { call, all, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import employeeActionTypes from './employee.types';
import staticUrls, { getRentalUpdateReturn } from '../api/api.urls';

import {
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
  addEmployeeSuccess,
  addEmployeeFailure,
  fetchAllRentalsSuccess,
  fetchAllRentalsFailure,
  fetchAllRentalsStart,
  updateRentalReturnFailure,
  updateRentalReturnSuccess
} from './employee.actions';

export function* fetchEmployee() {
  try {
    const response = yield call(axios.get, staticUrls.employees);
    response.data.succeeded
    ? yield put(fetchEmployeesSuccess(response.data.data))
    : yield put(fetchEmployeesFailure(response.data.errors))
  }
  catch (error) {
    yield put(fetchEmployeesFailure(error.response.data));
  }
}

export function* addEmployee({ payload }) {
  try {
    const response = yield call(axios.post, staticUrls.addEmployee, payload);
    response.data.succeeded
    ? yield put(addEmployeeSuccess(response.data.data))
    : yield put(addEmployeeFailure(response.errors))
  }
  catch (errors) {
    yield put(addEmployeeFailure(errors));
  }
}

export function* fetchAllRentals() {
  try {
    const response = yield call(axios.get, staticUrls.getAllRentals);
    response.data.succeeded
    ? yield put(fetchAllRentalsSuccess(response.data.data))
    : yield put(fetchAllRentalsFailure(response.data.errors))
  }
  catch (error) {
    yield put(fetchAllRentalsFailure(error));
  }
}

export function* updateRentalReturn({ payload: { rentalId, date } }) {
  try {
    const response = yield call(axios.post, getRentalUpdateReturn(rentalId), { date });    
    if (response.data.succeeded) {
      yield put(updateRentalReturnSuccess())
      yield put(fetchAllRentalsStart())
    }
    else {
      yield put(updateRentalReturnFailure(response.errors))
    } 
  }
  catch (errors) {
    yield put(updateRentalReturnFailure(errors));
  }
}

export function* onFetchEmployeeStart() {
  yield takeLatest(employeeActionTypes.FETCH_EMPLOYEES_START, fetchEmployee);
}

export function* onAddEmployeeStart() {
  yield takeLatest(employeeActionTypes.ADD_EMPLOYEE_START, addEmployee);
}

export function* onFetchAllRentalsStart() {
  yield takeLatest(employeeActionTypes.FETCH_ALL_RENTALS_START, fetchAllRentals);
}

export function* onUpdateRentalReturn() {
  yield takeLatest(employeeActionTypes.UPDATE_RENTAL_RETURN_START, updateRentalReturn);
}

export default function* EmployeeSagas() {
  yield all([
    call(onFetchEmployeeStart),
    call(onAddEmployeeStart),
    call(onFetchAllRentalsStart),
    call(onUpdateRentalReturn)
  ])
}