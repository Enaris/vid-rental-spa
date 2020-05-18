import { call, all, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import AdminActionTypes from './admin.types';

import { fireEmployeeSuccess, fireEmployeeFailure, activateEmployeeSuccess, activateEmployeeFailure } from './admin.actions';
import { getFireEmployeeUrl, getActivateEmployeeUrl } from '../api/api.urls';
import { fetchEmployeesStart } from '../employee/employee.actions';

export function* fireEmployee({ payload }) {
  try {
    const response = yield call(axios.post, getFireEmployeeUrl(payload));    
    if (response.data.succeeded) {
      yield put(fireEmployeeSuccess(response.data.data))
      yield put(fetchEmployeesStart())
    }
    else {
      yield put(fireEmployeeFailure(response.errors))
    } 
  }
  catch (errors) {
    yield put(fireEmployeeFailure(errors));
  }
}

export function* activateEmployee({ payload }) {
  try {
    const response = yield call(axios.post, getActivateEmployeeUrl(payload));    
    if (response.data.succeeded) {
      yield put(activateEmployeeSuccess(response.data.data))
      yield put(fetchEmployeesStart())
    }
    else {
      yield put(activateEmployeeFailure(response.errors))
    } 
  }
  catch (errors) {
    yield put(activateEmployeeFailure(errors));
  }
}

export function* onFireEmployeeStart() {
  yield takeLatest(AdminActionTypes.FIRE_EMPLOYEE_START, fireEmployee);
}

export function* onActivateEmployee() {
  yield takeLatest(AdminActionTypes.ACTIVATE_EMPLOYEE_START, activateEmployee)
}

export default function* AdminSagas() {
  yield all([
    call(onFireEmployeeStart),
    call(onActivateEmployee)
  ])
}