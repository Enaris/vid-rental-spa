import { combineReducers } from 'redux';

import AuthReducer from './auth/auth.reducer';
import EmployeeReducer from './employee/employee.reducer';
import MovieReducer from './movie/movie.reducer';
import CartridgeReducer from './cartridge/cartridge.reducer';
import CartridgeRentReducer from './cartridge-rent/cartridge-rent.reducer';
import AddressReducer from './address/address.reducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  employee: EmployeeReducer, 
  movie: MovieReducer,
  cartridge: CartridgeReducer,
  cartridgeRent: CartridgeRentReducer,
  address: AddressReducer
});

export default RootReducer;