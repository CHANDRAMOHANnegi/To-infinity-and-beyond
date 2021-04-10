import { createSelector } from 'reselect';

const selectJobs = state => state.jobReducer;

export const makeSelectJobs = () => createSelector(
    selectJobs,
    jobsState => jobsState.jobs
);
  


export const makeSelectJobsLoading = () => createSelector(
    selectJobs,
    jobsState => jobsState.loading
);
  