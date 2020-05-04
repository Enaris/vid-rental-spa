import { call, all, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import CartridgeRentActionTypes from './cartridge-rent.types';
import staticUrls from '../api/api.urls';

import {
  fetchRentListFailure,
  fetchRentListSuccess
} from './cartridge-rent.actions';

export function* fetchRentList() {
  try {
    const response = yield call(axios.get, staticUrls.getRentList);
    response.data.succeeded
    ? yield put(fetchRentListSuccess(response.data.data))
    : yield put(fetchRentListFailure(response.errors))
  }
  catch (errors) {
    yield put(fetchRentListFailure(errors));
  }
}

export function* onFetchRentListStart() {
  yield takeLatest(CartridgeRentActionTypes.FETCH_RENT_LIST_START, fetchRentList);
}

export default function* CartridgeRentSagas() {
  yield all([
    call(onFetchRentListStart),
  ])
}