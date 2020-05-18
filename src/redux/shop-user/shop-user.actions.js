import ShopUserActionTypes from './shop-user.types';

export const fetchUserRentalsStart = userId => ({
  type: ShopUserActionTypes.FETCH_USER_RENTALS_START,
  payload: userId
});

export const fetchUserRentalsSuccess = rentals => ({
  type: ShopUserActionTypes.FETCH_USER_RENTALS_SUCCESS,
  payload: rentals
});

export const fetchUserRentalsFailure = errors => ({
  type: ShopUserActionTypes.FETCH_USER_RENTALS_FAILURE,
  payload: errors
});