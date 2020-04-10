import { call, all, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import AuthActionTypes from './auth.types';
import staticUrls from '../api/api.urls';

import {
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFailure,
} from './auth.actions';

export function* login({ payload }) {
  const loginResult = yield call(axios.post, staticUrls.login, payload);    
  loginResult.data.succeeded 
    ? yield put(loginSuccess(loginResult.data))
    : yield put(loginFailure(loginResult.errors));
}

export function* register({ payload }) {
  const registerResult = yield call(axios.post, staticUrls.register, payload);
  registerResult.data.succeeded 
    ? yield put(registerSuccess(registerResult.data))
    : yield put(registerFailure(registerResult.errors))
}

export function* onLoginStart() {
  yield takeLatest(AuthActionTypes.LOGIN_START, login);
}

export function* onRegisterStart() {
  yield takeLatest(AuthActionTypes.REGISTER_START, register);
}

export default function* AuthSagas() {
  yield all([
    call(onLoginStart),
    call(onRegisterStart)
  ])
}