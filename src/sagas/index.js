import { fork } from 'redux-saga/effects';

function* watchFetchListTaskAction() {
  yield true;
  console.log('watching fetch list task action');
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
