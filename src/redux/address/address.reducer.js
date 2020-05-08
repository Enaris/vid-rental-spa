import AddressActionTypes from './address.types';

const INITIAL_STATE = {
  addresses: [],
  addressesErrors: null, 
  addressesLoading: true, 
  addAddressLoading: false,
  addErrors: null, 
  deactivateAddressLoading: false
}

const AddressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AddressActionTypes.FETCH_ADDRESSES_START:
      return {
        ...state,
        addressesErrors: null,
        addressesLoading: true,
        addresses: [] 
      }
    case AddressActionTypes.FETCH_ADDRESSES_SUCCESS:
      return {
        ...state,
        addressesErrors: null,
        addressesLoading: false,
        addresses: action.payload
      }
    case AddressActionTypes.FETCH_ADDRESSES_FAILURE:
      return {
        ...state,
        addressesErrors: action.payload,
        addressesLoading: false,
        addresses: []
      }
    case AddressActionTypes.NULL_ADDRESSES:
      return {
        ...state, 
        addresses: []
      }
    case AddressActionTypes.ADD_ADDRESS_START:
      return {
        ...state,
        addAddressLoading: true,
        addErrors: null
      }
    case AddressActionTypes.ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        addAddressLoading: false,
        addErrors: null
      }
    case AddressActionTypes.ADD_ADDRESS_FAILURE:
      return {
        ...state,
        addAddressLoading: false,
        addErrors: action.payload
      }
    case AddressActionTypes.DEACTIVATE_ADDRESS_START:
      return {
        ...state,
        deactivateAddressLoading: true,
      }
    case AddressActionTypes.DEACTIVATE_ADDRESS_SUCCESS:
      return {
        ...state,
        deactivateAddressLoading: false,
      }
    case AddressActionTypes.DEACTIVATE_ADDRESS_FAILURE:
      return {
        ...state,
        deactivateAddressLoading: false,
      }

    default:
      return state;
  }
}

export default AddressReducer;