import AddressActionTypes from './address.types';

export const fetchAddressesStart = userId => ({
  type: AddressActionTypes.FETCH_ADDRESSES_START,
  payload: userId
});

export const fetchAddressesSuccess = addresses => ({
  type: AddressActionTypes.FETCH_ADDRESSES_SUCCESS,
  payload: addresses
});

export const fetchAddressesFailure = errors => ({
  type: AddressActionTypes.FETCH_ADDRESSES_FAILURE,
  payload: errors
});

export const deactivateAddressStart = (addressId, userId) => ({
  type: AddressActionTypes.DEACTIVATE_ADDRESS_START,
  payload: { userId: userId, addressId: addressId }
});

export const deactivateAddressSuccess = userId => ({
  type: AddressActionTypes.DEACTIVATE_ADDRESS_SUCCESS,
  payload: userId
});

export const deactivateAddressFailure = errors => ({
  type: AddressActionTypes.DEACTIVATE_ADDRESS_FAILURE,
  payload: errors
});

export const addAddressStart = addData => ({
  type: AddressActionTypes.ADD_ADDRESS_START,
  payload: addData
});

export const addAddressSuccess = () => ({
  type: AddressActionTypes.ADD_ADDRESS_SUCCESS,
});

export const addAddressFailure = errors => ({
  type: AddressActionTypes.ADD_ADDRESS_FAILURE,
  payload: errors
});

export const nullAddresses = () => ({
  type: AddressActionTypes.NULL_ADDRESSES
});