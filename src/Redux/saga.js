import { all } from 'redux-saga/effects';
import jobsSaga from '../modules/jobs/redux/saga';

function* rootSaga() {
  yield all([
    ...jobsSaga
  ]);
}

export default rootSaga;