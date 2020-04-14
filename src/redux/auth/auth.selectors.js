import { createSelector } from 'reselect';

const selectAuth = state => state.auth;

export const selectCurrentUser = createSelector(
  [selectAuth],
  auth => auth.currentUser
);

export const selectLoading = createSelector(
  [selectAuth],
  auth => auth.loading
);

export const selectUserRoles = createSelector(
  [selectCurrentUser],
  user => user ? user.roles : null
);