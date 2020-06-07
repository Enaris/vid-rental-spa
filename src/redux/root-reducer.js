import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import AuthReducer from './auth/auth.reducer';
import EmployeeReducer from './employee/employee.reducer';
import MovieReducer from './movie/movie.reducer';
import CartridgeReducer from './cartridge/cartridge.reducer';
import CartridgeRentReducer from './cartridge-rent/cartridge-rent.reducer';
import AddressReducer from './address/address.reducer';
import ShopUserReducer from './shop-user/shop-user.reducer';

const RootReducer = history => combineReducers({
  router: connectRouter(history),
  auth: AuthReducer,
  employee: EmployeeReducer, 
  movie: MovieReducer,
  cartridge: CartridgeReducer,
  cartridgeRent: CartridgeRentReducer,
  address: AddressReducer,
  shopUser: ShopUserReducer
});

export default RootReducer;