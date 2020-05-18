import { call, all, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import ShopUserActionTypes from './shop-user.types';

import { fetchUserRentalsSuccess, fetchUserRentalsFailure } from './shop-user.actions';
import { getUserRentalsUrl } from '../api/api.urls';

export function* fetchUserRentals({ payload }) {
  try {
    const response = yield call(axios.get, getUserRentalsUrl(payload));
    response.data.succeeded
    ? yield put(fetchUserRentalsSuccess(response.data.data))
    : yield put(fetchUserRentalsFailure(response.errors))
  }
  catch (errors) {
    yield put(fetchUserRentalsFailure(errors));
  }
}

export function* onFetchUserRentalsStart() {
  yield takeLatest(ShopUserActionTypes.FETCH_USER_RENTALS_START, fetchUserRentals);
} 

export default function* ShopUserSagas() {
  yield all([
    call(onFetchUserRentalsStart),
  ])
}