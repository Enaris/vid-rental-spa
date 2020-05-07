import { call, all, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import CartridgeRentActionTypes from './cartridge-rent.types';
import staticUrls, { 
  getCartridgeForRentUrl,
  getCartridgeForRentFormUrl
} from '../api/api.urls';

import {
  fetchRentListFailure,
  fetchRentListSuccess,
  fetchForRentFailure, 
  fetchForRentSuccess,
  fetchRentFormFailure,
  fetchRentFormSuccess
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

export function* fetchForRent({ payload }) {
  try {
    const response = yield call(axios.get, getCartridgeForRentUrl(payload));
    response.data.succeeded
    ? yield put(fetchForRentSuccess(response.data.data))
    : yield put(fetchForRentFailure(response.errors))
  }
  catch (errors) {
    yield put(fetchForRentFailure(errors));
  }
}

export function* fetchForm({ payload: { cartridgeId, userId } }) {
  try {
    const response = yield call(axios.get, getCartridgeForRentFormUrl(cartridgeId, userId));
    response.data.succeeded
    ? yield put(fetchRentFormSuccess(response.data.data))
    : yield put(fetchRentFormFailure(response.errors))
  }
  catch (errors) {
    yield put(fetchRentFormFailure(errors));
  }
}

export function* onFetchRentListStart() {
  yield takeLatest(CartridgeRentActionTypes.FETCH_RENT_LIST_START, fetchRentList);
}

export function* onFetchCartridgeForRentStart() {
  yield takeLatest(CartridgeRentActionTypes.FETCH_FOR_RENT_START, fetchForRent);
}

export function* onFetchRentFormStart() {
  yield takeLatest(CartridgeRentActionTypes.FETCH_RENT_FORM_START, fetchForm);
}

export default function* CartridgeRentSagas() {
  yield all([
    call(onFetchRentListStart),
    call(onFetchCartridgeForRentStart),
    call(onFetchRentFormStart)
  ])
}