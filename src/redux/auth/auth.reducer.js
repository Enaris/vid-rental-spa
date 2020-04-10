import AuthActionTypes from './auth.types';

const INITIAL_STATE = {
  currentUser: null,
  errors: null,
  token: null
}

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      const { user, token } = action.payload.data;  
      return {
          ...state,
          currentUser: user,
          token
        }
    case AuthActionTypes.LOGIN_FAILURE:
      return {
          ...state,
          currentUser: null,
          token: null,
          errors: action.payload.errors
        }
    case AuthActionTypes.REGISTER_FAILURE:
      return {
          ...state,
          currentUser: null,
          token: null,
          errors: action.payload.errors
        }
    default:
      return state;
  }
}

export default AuthReducer;