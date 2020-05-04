import CartridgeRentActionTypes from './cartridge-rent.types';

const INITIAL_STATE = {
  rentList: [],
  rentListLoading: true
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
    default:
      return state;
  }
}

export default CartridgeRentReducer;