
import { FETCH_JOBS_REQUEST, UPDATE_JOB_FILTER_REQUEST } from './constants';

import { takeLatest, put, takeEvery } from '@redux-saga/core/effects';
import { fetchJobsSuccess, updateFilterSuccess } from './actions';

function* fetchJobsSaga({ payload, type }) {
    yield put(fetchJobsSuccess(payload));
}

function* updateJobsFilter({ payload, type }) {
    yield put(updateFilterSuccess(payload));
}

export default [
    takeLatest(FETCH_JOBS_REQUEST, fetchJobsSaga),
    takeEvery(UPDATE_JOB_FILTER_REQUEST, updateJobsFilter),
];
