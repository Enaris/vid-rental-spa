import { combineReducers } from 'redux';

import AuthReducer from './auth/auth.reducer';
import EmployeeReducer from './employee/employee.reducer';
import MovieReducer from './movie/movie.reducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  employee: EmployeeReducer, 
  movie: MovieReducer
});

export default RootReducer;