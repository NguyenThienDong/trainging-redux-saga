import { call, fork, take } from 'redux-saga/effects';
import * as taskConstants from '../constants/task';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants/index';

function* watchFetchListTaskAction() {
  yield take(taskConstants.FETCH_TASKS);
  const resp = yield call(getList);
  console.log(resp);
  const { status } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    // dispatch action fetchListTaskSuccess
  } else {
    // dispatch action fetchListTaskFail
  }
}

function* watchCreateTaskAction() {
  yield true;
  console.log('watching create task action');
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
