
import { SAVE_JOB_REQUEST } from './constants';

import { takeLatest, put } from '@redux-saga/core/effects';
import { saveJobSuccess } from './action';

function* saveJobsSaga({ payload, type }) {
    console.log('SAVE_JOB_REQUEST saga', payload);

    yield put(saveJobSuccess(payload));
}

export default [
    takeLatest(SAVE_JOB_REQUEST, saveJobsSaga),
];
