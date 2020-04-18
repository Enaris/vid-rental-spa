import { call, all } from 'redux-saga/effects';

import AuthSagas from './auth/auth.sagas';
import EmployeeSagas from './employee/employee.sagas';

export default function* RootSaga() {
  yield all([
    call(AuthSagas),
    call(EmployeeSagas)
  ])
}