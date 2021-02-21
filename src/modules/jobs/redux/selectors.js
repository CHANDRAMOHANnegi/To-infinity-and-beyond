import { createSelector } from 'reselect';

import { pathOr } from 'ramda';
import { makeSelectUser } from '../../applicant/redux/selectors';

const selectJobs = state => state.jobs;

export const makeSelectJobs = createSelector(
    selectJobs,
    jobsState => jobsState.jobs
);


export const makeSelectFilters = createSelector(
    selectJobs,
    jobsState => jobsState.filters
);

export const makeSelectLoading = createSelector(
    selectJobs,
    makeSelectUser,
    (jobsState, userState) => jobsState.loading || userState.loading
);


