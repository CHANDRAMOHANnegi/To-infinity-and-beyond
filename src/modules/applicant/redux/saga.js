
import { SAVE_JOB_REQUEST } from './constants';

import { takeLatest, put } from '@redux-saga/core/effects';
import { saveJobSuccess } from './action';

function* saveJobsSaga({ payload, type }) {
    yield put(saveJobSuccess(payload));
}

export default [
    takeLatest(SAVE_JOB_REQUEST, saveJobsSaga),
];
