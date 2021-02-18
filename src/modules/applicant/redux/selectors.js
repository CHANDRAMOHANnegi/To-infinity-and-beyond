import { createSelector } from 'reselect';
import { pathOr } from 'ramda';

const selectUser = state => state.user

export const makeSelectUserApplications = () => createSelector(
    selectUser,
    user => user.applications || []
);

export const makeSelectIsSavedJob = (jobId) => createSelector(
    makeSelectUserApplications,
    applications => applications
);
