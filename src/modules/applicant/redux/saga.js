
import { FETCH_USER_REQUEST, SAVE_JOB_REQUEST, UNSAVE_JOB_REQUEST } from './constants';

import { take, put, select, takeEvery, takeLatest, takeLeading } from '@redux-saga/core/effects';
import { fetchUserSuccess, saveJobSuccess, unSaveJobRequest, unSaveJobSuccess } from './action';
import { makeSelectSavedJobs, makeSelectUserApplications } from './selectors';

function* fetchUserSaga({ payload }) {
    yield put(fetchUserSuccess(payload));
}

function* saveJobsSaga({ payload: job_id }) {
    console.log('savejob', job_id);
    const savedJobs = yield select(makeSelectSavedJobs);
    yield put(saveJobSuccess([...savedJobs, job_id]));
}

function* unSaveJobsSaga({ payload: job_id }) {
    console.log('unSaveJobsSaga', job_id);
    const savedJobs = yield select(makeSelectSavedJobs);
    yield put(unSaveJobSuccess(savedJobs.filter(id => id != job_id)));
}

export default [
    takeLatest(FETCH_USER_REQUEST, fetchUserSaga),
    takeEvery(SAVE_JOB_REQUEST, saveJobsSaga),
    takeEvery(UNSAVE_JOB_REQUEST, unSaveJobsSaga),
];
