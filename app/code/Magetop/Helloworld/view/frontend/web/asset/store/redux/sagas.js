import { all } from 'redux-saga/effects';
import chartSagas from './chart/saga';

export default function* rootSaga(getState) {
  yield all([
    chartSagas(),
  ]);
}
