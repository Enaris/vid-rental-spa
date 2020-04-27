import { call, all } from 'redux-saga/effects';

import AuthSagas from './auth/auth.sagas';
import EmployeeSagas from './employee/employee.sagas';
import MovieSagas from './movie/movie.sagas';

export default function* RootSaga() {
  yield all([
    call(AuthSagas),
    call(EmployeeSagas), 
    call(MovieSagas)
  ])
}