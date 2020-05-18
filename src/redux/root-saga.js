import { call, all } from 'redux-saga/effects';

import AuthSagas from './auth/auth.sagas';
import EmployeeSagas from './employee/employee.sagas';
import MovieSagas from './movie/movie.sagas';
import CartridgeSagas from './cartridge/cartridge.sagas';
import CartridgeRentSagas from './cartridge-rent/cartridge-rent.sagas';
import AddressSagas from './address/address.sagas';
import ShopUserSagas from './shop-user/shop-user.sagas';
import AdminSagas from './admin/admin.sagas';

export default function* RootSaga() {
  yield all([
    call(AuthSagas),
    call(EmployeeSagas), 
    call(MovieSagas),
    call(CartridgeSagas),
    call(CartridgeRentSagas),
    call(AddressSagas),
    call(ShopUserSagas),
    call(AdminSagas)
  ])
}