import AuthActionTypes from './auth.types';

export const loginStart = loginData => ({
  type: AuthActionTypes.LOGIN_START,
  payload: loginData
});

export const loginSuccess = loginResult => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: loginResult
});

export const loginFailure = errors => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  payload: errors
});

export const registerStart = registerData => ({
  type: AuthActionTypes.REGISTER_START,
  payload: registerData
});

export const registerSuccess = () => ({
  type: AuthActionTypes.REGISTER_SUCCESS,
});

export const registerFailure = errors => ({
  type: AuthActionTypes.REGISTER_FAILURE,
  payload: errors
});
