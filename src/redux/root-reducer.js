import { combineReducers } from 'redux';

import AuthReducer from './auth/auth.reducer';
import EmployeeReducer from './employee/employee.reducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  employee: EmployeeReducer
});

export default RootReducer;