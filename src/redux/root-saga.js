import { call, all } from 'redux-saga/effects';

import AuthSagas from './auth/auth.sagas';
import EmployeeSagas from './employee/employee.sagas';
import MovieSagas from './movie/movie.sagas';
import CartridgeSagas from './cartridge/cartridge.sagas';
import CartridgeRentSagas from './cartridge-rent/cartridge-rent.sagas';

export default function* RootSaga() {
  yield all([
    call(AuthSagas),
    call(EmployeeSagas), 
    call(MovieSagas),
    call(CartridgeSagas),
    call(CartridgeRentSagas)
  ])
}