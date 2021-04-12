
import { FETCH_JOBS_REQUEST } from './constants';

import { takeLatest, put, delay } from '@redux-saga/core/effects';
import { fetchJobsSuccess } from './actions';

function* fetchJobsSaga({ payload, type }) {
    // console.log('fetchJobsSaga', payload);
    yield delay(1000)
    yield put(fetchJobsSuccess(payload));
}

export default [
    takeLatest(FETCH_JOBS_REQUEST, fetchJobsSaga),
];
