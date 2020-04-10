import { call, all } from 'redux-saga/effects';

import AuthSagas from './auth/auth.sagas';

export default function* RootSaga() {
  yield all([
    call(AuthSagas)
  ])
}