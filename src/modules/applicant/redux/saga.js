
import { FETCH_USER_REQUEST, SAVE_JOB_REQUEST, UNSAVE_JOB_REQUEST } from './constants';

import { take, put, select, takeEvery, takeLatest, takeLeading } from '@redux-saga/core/effects';
import { fetchUserSuccess, saveJobSuccess, unSaveJobRequest } from './action';
import { makeSelectSavedJobs, makeSelectUserApplications } from './selectors';

function* fetchUserSaga({ payload }) {
    yield put(fetchUserSuccess(payload));
}


function* saveJobsSaga({ payload, type }) {
    const savedJobs = yield select(makeSelectSavedJobs());
    // console.log('====>', savedJobs);
    yield put(saveJobSuccess([]));
}


function* unSaveJobsSaga({ payload, type }) {
    const savedJobs = yield select(makeSelectSavedJobs());
    // console.log('====>', savedJobs);
    yield put(saveJobSuccess([]));
}

export default [
    takeLatest(FETCH_USER_REQUEST, fetchUserSaga),
    takeEvery(SAVE_JOB_REQUEST, saveJobsSaga),
    takeEvery(UNSAVE_JOB_REQUEST, unSaveJobsSaga),
];
