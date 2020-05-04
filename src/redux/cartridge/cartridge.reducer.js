import CartridgeActionTypes from './cartridge.types';

const INITIAL_STATE = {
  movies4Dropdown: [],
  moviesErrors: null,
  dropdownLoading: true,
  addErrors: null,
  cartridgesLoading: true,
  cartridges: [], 
  cartridgeDetails: null, 
  cartridgeDetailsLoading: true,
  cartridgeDetailsErrors: null,
  editCartridgeErrors: null
}

export const CartridgeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartridgeActionTypes.FETCH_MOVIES_FOR_DROPDOWN_START:
      return {
        ...state, 
        dropdownLoading: true,
        movies4Dropdown: [],
        moviesErrors: null
      }
    case CartridgeActionTypes.FETCH_MOVIES_FOR_DROPDOWN_SUCCESS: 
      return {
        ...state, 
        dropdownLoading: false,
        movies4Dropdown: action.payload,
        moviesErrors: null
      }
    case CartridgeActionTypes.FETCH_MOVIES_FOR_DROPDOWN_FAILURE: 
      return {
        ...state, 
        dropdownLoading: true,
        movies4Dropdown: null,
        moviesErrors: action.payload
      }
    case CartridgeActionTypes.ADD_CARTRIDGE_FAILURE: 
      return {
        ...state, 
        addErrors: action.payload
      }
    case CartridgeActionTypes.ADD_CARTRIDGE_SUCCESS: 
      return {
        ...state, 
        addErrors: null
      }
    case CartridgeActionTypes.ADD_CARTRIDGE_START: 
      return {
        ...state, 
        addErrors: null
      }

    case CartridgeActionTypes.FETCH_CARTRIDGES_FAILURE: 
      return {
        ...state, 
        cartridges: [],
        cartridgesLoading: false
      }
    case CartridgeActionTypes.FETCH_CARTRIDGES_SUCCESS: 
      return {
        ...state, 
        cartridgesLoading: false,
        cartridges: action.payload
      }
    case CartridgeActionTypes.FETCH_CARTRIDGES_START: 
      return {
        ...state, 
        cartridgesLoading: true,
        cartridges: []
      }

    case CartridgeActionTypes.FETCH_CARTRIDGE_FAILURE: 
      return {
        ...state, 
        cartridgeDetailsErrors: null,
        cartridgeDetails: null,
        cartridgeDetailsLoading: false
      }
    case CartridgeActionTypes.FETCH_CARTRIDGE_SUCCESS: 
      return {
        ...state, 
        cartridgeDetailsErros: null,
        cartridgeDetailsLoading: false,
        cartridgeDetails: action.payload
      }
    case CartridgeActionTypes.FETCH_CARTRIDGE_START: 
      return {
        ...state, 
        cartridgeDetailsLoading: true,
        cartridgeDetails: null,
        cartridgeDetailsErrors: null
      }
    
    default:
      return state;
  }
}

export default CartridgeReducer;