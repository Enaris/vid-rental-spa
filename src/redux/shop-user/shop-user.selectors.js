import { createSelector } from 'reselect';

const selectShopUser = state => state.shopUser;

export const selectUserRentals = createSelector(
  [selectShopUser],
  shopUser => shopUser.rentals
);

export const selectRentalsLoading = createSelector(
  [selectShopUser],
  shopUser => shopUser.rentalsLoading
);
