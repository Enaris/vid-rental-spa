import CartridgeActionTypes from './cartridge.types';

export const addCartridgeStart = cartridge => ({
  type: CartridgeActionTypes.ADD_CARTRIDGE_START,
  payload: cartridge
});

export const addCartridgeSuccess = () => ({
  type: CartridgeActionTypes.ADD_CARTRIDGE_SUCCESS
});

export const addCartridgeFailure = errors => ({
  type: CartridgeActionTypes.ADD_CARTRIDGE_FAILURE,
  payload: errors
});

export const fetchMovies4DropdownStart = () => ({
  type: CartridgeActionTypes.FETCH_MOVIES_FOR_DROPDOWN_START,
});

export const fetchMovies4DropdownSuccess = movies => ({
  type: CartridgeActionTypes.FETCH_MOVIES_FOR_DROPDOWN_SUCCESS,
  payload: movies
});

export const fetchMovies4DropdownFailure = errors => ({
  type: CartridgeActionTypes.FETCH_MOVIES_FOR_DROPDOWN_FAILURE,
  payload: errors
});

export const fetchCartridgesStart = () => ({
  type: CartridgeActionTypes.FETCH_CARTRIDGES_START,
});

export const fetchCartridgesSuccess = cartridges => ({
  type: CartridgeActionTypes.FETCH_CARTRIDGES_SUCCESS,
  payload: cartridges
});

export const fetchCartridgesFailure = errors => ({
  type: CartridgeActionTypes.FETCH_CARTRIDGES_FAILURE,
  payload: errors
});

export const fetchCartridgeStart = id => ({
  type: CartridgeActionTypes.FETCH_CARTRIDGE_START,
  payload: id
});

export const fetchCartridgeSuccess = cartridge => ({
  type: CartridgeActionTypes.FETCH_CARTRIDGE_SUCCESS,
  payload: cartridge
});

export const fetchCartridgeFailure = errors => ({
  type: CartridgeActionTypes.FETCH_CARTRIDGE_FAILURE,
  payload: errors
});

export const editCartridgeStart = cartridge => ({
  type: CartridgeActionTypes.EDIT_CARTRIDGE_START,
  payload: cartridge
});

export const editCartridgeSuccess = () => ({
  type: CartridgeActionTypes.EDIT_CARTRIDGE_SUCCESS,
});

export const editCartridgeFailure = errors => ({
  type: CartridgeActionTypes.EDIT_CARTRIDGE_FAILURE,
  payload: errors
});
