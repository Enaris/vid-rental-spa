import { combineReducers } from 'redux';

import AuthReducer from './auth/auth.reducer';

const RootReducer = combineReducers({
  auth: AuthReducer
});

export default RootReducer;