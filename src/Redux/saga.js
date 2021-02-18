import { all } from 'redux-saga/effects';
import jobsSaga from '../modules/jobs/redux/saga';
import userSaga from '../modules/applicant/redux/saga';

function* rootSaga() {
  yield all([
    ...jobsSaga,
    ...userSaga
  ]);
}

export default rootSaga;