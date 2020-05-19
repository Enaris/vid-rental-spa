import { call, all, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import CartridgeActionTypes from './cartridge.types';
import staticUrls, { getCartridgeUrl, getCartridgeUpdateUrl } from '../api/api.urls';

import {
  fetchMovies4DropdownSuccess,
  fetchMovies4DropdownFailure,
  addCartridgeSuccess,
  addCartridgeFailure,
  fetchCartridgesSuccess,
  fetchCartridgesFailure,
  fetchCartridgeSuccess,
  fetchCartridgeFailure,
  updateCartridgeSuccess,
  fetchCartridgeStart,
  updateCartridgeFailure
} from './cartridge.actions';

export function* fetchMovies4Dropdown() {
  try {
    const response = yield call(axios.get, staticUrls.movies4Dropdown);
    response.data.succeeded
    ? yield put(fetchMovies4DropdownSuccess(response.data.data))
    : yield put(fetchMovies4DropdownFailure(response.errors))
  }
  catch (errors) {
    yield put(fetchMovies4DropdownFailure(errors));
  }
}

export function* addCartridge({ payload }) {
  try {
    const response = yield call(axios.post, staticUrls.addCartridge, payload);
    response.data.succeeded
    ? yield put(addCartridgeSuccess())
    : yield put(addCartridgeFailure(response.errors))
  }
  catch (errors) {
    yield put(addCartridgeFailure(errors));
  }
}

export function* fetchCartridges() {
  try {
    const response = yield call(axios.get, staticUrls.getCartridges);
    response.data.succeeded
    ? yield put(fetchCartridgesSuccess(response.data.data))
    : yield put(fetchCartridgesFailure(response.errors))
  }
  catch (errors) {
    yield put(fetchCartridgesFailure(errors));
  }
}

export function* fetchCartridge({ payload }) {
  try {
    const response = yield call(axios.get, getCartridgeUrl(payload));
    response.data.succeeded
    ? yield put(fetchCartridgeSuccess(response.data.data))
    : yield put(fetchCartridgeFailure(response.errors))
  }
  catch (errors) {
    yield put(fetchCartridgeFailure(errors));
  }
}

export function* updateCartridge({ payload: {cartridgeId, data} }) {
  try {
    const response = yield call(axios.post, getCartridgeUpdateUrl(cartridgeId), data);    
    if (response.data.succeeded) {
      yield put(updateCartridgeSuccess())
      yield put(fetchCartridgeStart(cartridgeId))
    }
    else {
      yield put(updateCartridgeFailure(response.errors))
    } 
  }
  catch (errors) {
    yield put(updateCartridgeFailure(errors));
  }
}

export function* onFetchMovies4Dropdown() {
  yield takeLatest(CartridgeActionTypes.FETCH_MOVIES_FOR_DROPDOWN_START, fetchMovies4Dropdown);
} 

export function* onAddCartridgeStart() {
  yield takeLatest(CartridgeActionTypes.ADD_CARTRIDGE_START, addCartridge);
}

export function* onFetchCartridges() {
  yield takeLatest(CartridgeActionTypes.FETCH_CARTRIDGES_START, fetchCartridges);
}

export function* onFetchCartridge() {
  yield takeLatest(CartridgeActionTypes.FETCH_CARTRIDGE_START, fetchCartridge);
}

export function* onUpdateCartridge() {
  yield takeLatest(CartridgeActionTypes.UPDATE_CARTRIDGE_START, updateCartridge);
}

export default function* CartridgeSagas() {
  yield all([
    call(onFetchMovies4Dropdown),
    call(onAddCartridgeStart),
    call(onFetchCartridges),
    call(onFetchCartridge), 
    call(onUpdateCartridge)
  ])
}