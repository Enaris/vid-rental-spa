import { call, all, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import AuthActionTypes from './auth.types';
import staticUrls from '../api/api.urls';

import {
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFailure,
  saveToken,
  checkTokenSuccess,
  checkTokenFailure,
  loginStart,
  saveUser
} from './auth.actions';

export function* login({ payload }) {
  try {
    const loginResult = yield call(axios.post, staticUrls.login, payload);    
    if (loginResult.data.succeeded) {
      yield put(loginSuccess(loginResult.data));
      yield put(saveToken(loginResult.data.data.token));
    }
    else {
      yield put(loginFailure(loginResult.errors));
    }
  }
  catch (error) {
    yield put(loginFailure(error.response.data));
  }
}

export function* register({ payload }) {
  try {
    const registerResult = yield call(axios.post, staticUrls.register, payload);
    if (registerResult.data.succeeded) {
      yield put(registerSuccess(registerResult.data));
      yield put(loginStart({ email: payload.email, password: payload.password}));
    }
    else {
      yield put(registerFailure(registerResult.errors));
    }
  }
  catch (error) {
    yield put(registerFailure(error));
  }
}

export function* checkToken({ payload }) {
  if (payload == null)
  {
    yield put(checkTokenSuccess(""));
    return;
  }
  try {
    const checkResult = yield call(axios.post, staticUrls.refreshToken, { token: payload });
    if (checkResult.data.succeeded) {
      yield put(saveToken(checkResult.data.data.token));
      yield put(saveUser(checkResult.data.data.user));
      yield put(checkTokenSuccess(checkResult.data));
    }
    else {
      yield put(checkTokenFailure(checkResult.data));
    }
  }
  catch (error) {
    yield put(checkTokenFailure(error));
  }
}

export function* onLoginStart() {
  yield takeLatest(AuthActionTypes.LOGIN_START, login);
}

export function* onRegisterStart() {
  yield takeLatest(AuthActionTypes.REGISTER_START, register);
}

export function* onCheckTokenStart() {
  yield takeLatest(AuthActionTypes.CHECK_TOKEN_START, checkToken);
}

export default function* AuthSagas() {
  yield all([
    call(onLoginStart),
    call(onRegisterStart),
    call(onCheckTokenStart)
  ])
}