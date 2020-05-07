import CartridgeRentActionTypes from './cartridge-rent.types';

const INITIAL_STATE = {
  rentList: [],
  rentListLoading: true,
  cartridgeForRent: null,
  cartridgeForRentLoading: true,
  rentForm: null,
  rentFormLoading: true,
  rentFormErrors: null
}

export const CartridgeRentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartridgeRentActionTypes.FETCH_RENT_LIST_START:
      return {
        ...state, 
        rentList: [],
        rentListLoading: true
      }
    case CartridgeRentActionTypes.FETCH_RENT_LIST_SUCCESS: 
      return {
        ...state, 
        rentList: action.payload,
        rentListLoading: false
      }
    case CartridgeRentActionTypes.FETCH_RENT_LIST_FAILURE: 
      return {
        ...state, 
        rentList: [],
        rentListLoading: false
      }
    case CartridgeRentActionTypes.FETCH_FOR_RENT_START:
      return {
        ...state, 
        cartridgeForRent: null, 
        cartridgeForRentLoading: true
      }
    case CartridgeRentActionTypes.FETCH_FOR_RENT_SUCCESS: 
      return {
        ...state, 
        cartridgeForRent: action.payload, 
        cartridgeForRentLoading: false
      }
    case CartridgeRentActionTypes.FETCH_FOR_RENT_FAILURE: 
      return {
        ...state, 
        cartridgeForRent: null, 
        cartridgeForRentLoading: false
      }
    case CartridgeRentActionTypes.FETCH_RENT_FORM_START:
      return {
        ...state,
        rentForm: null,
        rentFormLoading: true,
        rentFormErrors: null 
      }
    case CartridgeRentActionTypes.FETCH_RENT_FORM_SUCCESS: 
      return {
        ...state, 
        rentForm: action.payload,
        rentFormLoading: false,
        rentFormErrors: null 
      }
    case CartridgeRentActionTypes.FETCH_RENT_FORM_FAILURE: 
      return {
        ...state, 
        rentForm: null,
        rentFormLoading: false,
        rentFormErrors: action.payload
      }
    default:
      return state;
  }
}

export default CartridgeRentReducer;