import { createSelector } from 'reselect';
import { pathOr } from 'ramda';

const selectJobs = state => state.jobs;

export const makeSelectJobs = createSelector(
    selectJobs,
    jobsState => jobsState.jobs
);


export const makeSelectFilters = createSelector(
    selectJobs,
    jobsState => jobsState.filters
);
