import { call, all, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import AddressActionTypes from './address.types';
import staticUrls, { getUserAddressesUrl, getDeactivateAddressUrl } from '../api/api.urls';

import {
  fetchAddressesFailure,
  fetchAddressesSuccess,
  addAddressSuccess,
  addAddressFailure,
  deactivateAddressSuccess,
  deactivateAddressFailure,
  fetchAddressesStart
} from './address.actions';

export function* fetchAddresses({ payload }) {
  try {
    const response = yield call(axios.get, getUserAddressesUrl(payload));    
    response.data.succeeded
    ? yield put(fetchAddressesSuccess(response.data.data))
    : yield put(fetchAddressesFailure(response.errors))
  }
  catch (errors) {
    yield put(fetchAddressesFailure(errors));
  }
}

export function* addAddress({ payload }) {
  try {
    const data = {
      ...payload.address, 
      userId: payload.userId
    }
    const response = yield call(axios.post, staticUrls.addAddress, data);    
    response.data.succeeded
    ? yield put(addAddressSuccess(response.data.data))
    : yield put(addAddressFailure(response.errors))
  }
  catch (errors) {
    yield put(addAddressFailure(errors));
  }
}

export function* deactivateAddress({ payload }) {
  try {
    const response = yield call(axios.post, getDeactivateAddressUrl(payload.addressId));    
    if (response.data.succeeded) {
      yield put(deactivateAddressSuccess(response.data.data));
      yield put(fetchAddressesStart(payload.userId));
    }
    else {
      yield put(deactivateAddressFailure(response.errors))
    }
  }
  catch (errors) {
    yield put(deactivateAddressFailure(errors));
  }
} 

export function* onFetchAddressesStart() {
  yield takeLatest(AddressActionTypes.FETCH_ADDRESSES_START, fetchAddresses);
}

export function* onAddAddressStart() {
  yield takeLatest(AddressActionTypes.ADD_ADDRESS_START, addAddress);
}

export function* onDeactivateAddressStart() {
  yield takeLatest(AddressActionTypes.DEACTIVATE_ADDRESS_START, deactivateAddress);
}

export default function* AddressSagas() {
  yield all([
    call(onFetchAddressesStart),
    call(onAddAddressStart),
    call(onDeactivateAddressStart)
  ])
}