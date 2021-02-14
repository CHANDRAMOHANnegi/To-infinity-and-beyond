
import { FETCH_JOBS_REQUEST } from './constants';

import { takeLatest, put } from '@redux-saga/core/effects';
import { fetchJobsSuccess } from './actions';

function* fetchJobsSaga({ payload, type }) {
    yield put(fetchJobsSuccess(payload));
}

export default [
    takeLatest(FETCH_JOBS_REQUEST, fetchJobsSaga),
];
