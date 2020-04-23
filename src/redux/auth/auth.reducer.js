import AuthActionTypes from './auth.types';
import axios from 'axios';

const INITIAL_STATE = {
  currentUser: null,
  errors: null,
  token: null,
  tokenLoading: true,
  userLoading: false, 
  registerLoading: false
}

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_START:
      return {
        ...state, 
        userLoading: true
      }
    case AuthActionTypes.LOGIN_SUCCESS:
      const { user, token } = action.payload.data;  
      return {
        ...state,
        currentUser: user,
        token,
        userLoading: false
      }
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        currentUser: null,
        token: null,
        errors: action.payload.errors,
        userLoading: false
      }
    case AuthActionTypes.REGISTER_START:
      return {
        ...state, 
        registerLoading: false
      }
    case AuthActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        currentUser: null,
        token: null,
        errors: action.payload.errors, 
        registerLoading: false
      }
    case AuthActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        registerLoading: false
      }
    case AuthActionTypes.SAVE_TOKEN:
      sessionStorage.setItem('userToken', action.payload);
      axios.defaults.headers.common = {
        'Authorization': `Bearer ${ action.payload }`
      };
      return {
        ...state,
        token: action.payload
      }
    case AuthActionTypes.SAVE_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case AuthActionTypes.LOGOUT:
      sessionStorage.removeItem('userToken');
      axios.defaults.headers.common = {
        'Authorization': ''
      };
      return {
        ...state,
        token: null,
        currentUser: null
      }
    case AuthActionTypes.CHECK_TOKEN_START:
      return {
        ...state,
        tokenLoading: true
      }
    case AuthActionTypes.CHECK_TOKEN_FAILURE:
      sessionStorage.removeItem('userToken');
      axios.defaults.headers.common = {
        'Authorization': ''
      };
      return {
        ...state,
        token: null,
        currentUser: null,
        tokenLoading: false
      }
    case AuthActionTypes.CHECK_TOKEN_SUCCESS:
      return {
        ...state,
        tokenLoading: false
      }
    default:
      return state;
  }
}

export default AuthReducer;