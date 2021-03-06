import { createSelector } from 'reselect';

const selectAuth = state => state.auth;

export const selectCurrentUser = createSelector(
  [selectAuth],
  auth => auth.currentUser
);

export const selectLoginErrors = createSelector(
  [selectAuth],
  auth => auth.loginErrors
);

export const selectLoading = createSelector(
  [selectAuth],
  auth => auth.userLoading || auth.tokenLoading || auth.registerLoading
);

export const selectUserRoles = createSelector(
  [selectCurrentUser],
  user => user ? user.roles : null
);

export const selectUserId = createSelector(
  [selectCurrentUser],
  user => user ? user.id : null
);