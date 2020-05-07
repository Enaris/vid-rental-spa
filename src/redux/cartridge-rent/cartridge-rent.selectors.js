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

export const selectCartridgeForRent = createSelector(
  [selectCartridgeRent],
  cartridgeR => cartridgeR.cartridgeForRent
);

export const selectCartridgeForRentLoading = createSelector(
  [selectCartridgeRent],
  cartridgeR => cartridgeR.cartridgeForRentLoading
);

export const selectRentForm = createSelector(
  [selectCartridgeRent],
  cartridgeR => cartridgeR.rentForm
);

export const selectRentFormLoading = createSelector(
  [selectCartridgeRent],
  cartridgeR => cartridgeR.rentFormLoading
);

export const selectRentFormErrors = createSelector(
  [selectCartridgeRent],
  cartridgeR => cartridgeR.rentFormErrors
);