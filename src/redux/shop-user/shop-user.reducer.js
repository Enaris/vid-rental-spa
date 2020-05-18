import ShopUserActionTypes from './shop-user.types';

const INITIAL_STATE = {
  rentals: [],
  rentalsLoading: true,
  rentalsErrors: null
}

export const ShopUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopUserActionTypes.FETCH_USER_RENTALS_START:
      return {
        ...state, 
        rentalsLoading: true,
        rentals: [],
        rentalsErrors: null
      }
    case ShopUserActionTypes.FETCH_USER_RENTALS_SUCCESS: 
      return {
        ...state, 
        rentalsLoading: false,
        rentals: action.payload,
        rentalsErrors: null
      }
    case ShopUserActionTypes.FETCH_USER_RENTALS_FAILURE: 
      return {
        ...state, 
        rentalsLoading: false,
        rentals: [],
        rentalsErrors: action.payload
      }
    
    default:
      return state;
  }
}

export default ShopUserReducer;