import { createSelector } from 'reselect';

const selectCartridge = state => state.cartridge;

export const selectMovies4Dropdown = createSelector(
  [selectCartridge],
  cartridge => cartridge.movies4Dropdown
);

export const selectDropdownLoading = createSelector(
  [selectCartridge],
  cartridge => cartridge.dropdownLoading
)

export const selectCartridges = createSelector(
  [selectCartridge],
  cartridge => cartridge.cartridges
)

export const selectCartridgesLoading = createSelector(
  [selectCartridge],
  cartridge => cartridge.cartridgesLoading
)

export const selectCartridgeDetails = createSelector(
  [selectCartridge],
  cartridge => cartridge.cartridgeDetails
)

export const selectCartridgeDetailsLoading = createSelector(
  [selectCartridge],
  cartridge => cartridge.cartridgeDetailsLoading
)