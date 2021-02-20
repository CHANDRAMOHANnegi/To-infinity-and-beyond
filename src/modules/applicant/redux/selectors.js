import { createSelector } from 'reselect';
import { pathOr, propOr } from 'ramda';

const selectUser = state => state.user

export const makeSelectUser = createSelector(
    selectUser,
    userState => userState.user
);

export const makeSelectUserApplications = createSelector(
    makeSelectUser,
    user => user.applications || []
);

export const makeSelectSavedJobs = createSelector(
    makeSelectUser,
    user => user.saved_jobs || []
);
