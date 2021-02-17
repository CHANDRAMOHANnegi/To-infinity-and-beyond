import { createSelector } from 'reselect';
import { pathOr } from 'ramda';

const selectUser = state => state.user;

export const makeSelectUser = () => createSelector(
    selectUser,
    userState => userState.user
);
