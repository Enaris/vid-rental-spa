import CartridgeRentActionTypes from './cartridge-rent.types';

export const fetchRentListStart = () => ({
  type: CartridgeRentActionTypes.FETCH_RENT_LIST_START
});

export const fetchRentListSuccess = rentList => ({
  type: CartridgeRentActionTypes.FETCH_RENT_LIST_SUCCESS,
  payload: rentList
});

export const fetchRentListFailure = errors => ({
  type: CartridgeRentActionTypes.FETCH_RENT_LIST_FAILURE,
  payload: errors
});

export const fetchForRentStart = id => ({
  type: CartridgeRentActionTypes.FETCH_FOR_RENT_START,
  payload: id
});

export const fetchForRentSuccess = cartridge => ({
  type: CartridgeRentActionTypes.FETCH_FOR_RENT_SUCCESS,
  payload: cartridge
});

export const fetchForRentFailure = errors => ({
  type: CartridgeRentActionTypes.FETCH_FOR_RENT_FAILURE,
  payload: errors
});

export const fetchRentFormStart = (cartridgeId, userId) => ({
  type: CartridgeRentActionTypes.FETCH_RENT_FORM_START,
  payload: { cartridgeId, userId }
});

export const fetchRentFormSuccess = formData => ({
  type: CartridgeRentActionTypes.FETCH_RENT_FORM_SUCCESS,
  payload: formData
});

export const fetchRentFormFailure = errors => ({
  type: CartridgeRentActionTypes.FETCH_RENT_FORM_FAILURE,
  payload: errors
});

export const rentCartridgeStart = rentRequest => ({
  type: CartridgeRentActionTypes.RENT_CARTRIDGE_START,
  payload: rentRequest
});

export const rentCartridgeSuccess = () => ({
  type: CartridgeRentActionTypes.RENT_CARTRIDGE_SUCCESS,
});

export const rentCartridgeFailure = errors => ({
  type: CartridgeRentActionTypes.RENT_CARTRIDGE_FAILURE,
  payload: errors
});