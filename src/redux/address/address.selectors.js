import { createSelector } from 'reselect';

const selectAddress = state => state.address;

export const selectAddresses = createSelector(
  [selectAddress],
  address => address.addresses
);

export const selectAddressesLoading = createSelector(
  [selectAddress],
  address => address.addressesLoading
);
