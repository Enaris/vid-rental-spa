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