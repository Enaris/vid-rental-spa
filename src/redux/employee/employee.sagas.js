import { call, all, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import employeeActionTypes from './employee.types';
import staticUrls from '../api/api.urls';

import {
  fetchEmployeesSuccess,
  fetchEmployeesFailure
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

export function* onFetchEmployeeStart() {
  yield takeLatest(employeeActionTypes.FETCH_EMPLOYEES_START, fetchEmployee);
}

export default function* EmployeeSagas() {
  yield all([
    call(onFetchEmployeeStart)
  ])
}