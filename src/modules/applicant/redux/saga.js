
import { APPLY_JOB_REQUEST, FETCH_USER_REQUEST, SAVE_JOB_REQUEST, UNSAVE_JOB_REQUEST } from './constants';

import { put, select, takeEvery, takeLatest, } from '@redux-saga/core/effects';
import { applyJobSuccess, fetchUserSuccess, saveJobSuccess, unSaveJobSuccess } from './action';
import { makeSelectSavedJobs, makeSelectUserApplications } from './selectors';

function* fetchUserSaga({ payload }) {
    yield put(fetchUserSuccess(payload));
}

function* saveJobsSaga({ payload: job_id }) {
    const savedJobs = yield select(makeSelectSavedJobs);
    yield put(saveJobSuccess([...savedJobs, job_id]));
}

function* unSaveJobsSaga({ payload: job_id }) {
    const savedJobs = yield select(makeSelectSavedJobs);
    yield put(unSaveJobSuccess(savedJobs.filter(id => id != job_id)));
}

function* applyJobsSaga({ payload: job_id }) {
    console.log(job_id);
    const appliedJobs = yield select(makeSelectUserApplications);
    yield put(applyJobSuccess([...appliedJobs, job_id]));
}

export default [
    takeLatest(FETCH_USER_REQUEST, fetchUserSaga),
    takeEvery(SAVE_JOB_REQUEST, saveJobsSaga),
    takeEvery(UNSAVE_JOB_REQUEST, unSaveJobsSaga),
    takeEvery(APPLY_JOB_REQUEST, applyJobsSaga),
];
