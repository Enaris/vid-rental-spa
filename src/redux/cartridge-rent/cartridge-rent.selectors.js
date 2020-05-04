import { createSelector } from 'reselect';

const selectCartridgeRent = state => state.cartridgeRent;

export const selectRentList = createSelector(
  [selectCartridgeRent],
  cartridgeR => cartridgeR.rentList
);

export const selectRentListLoading = createSelector(
  [selectCartridgeRent],
  cartridgeR => cartridgeR.rentListLoading
);
