/* eslint-disable spaced-comment */
import { call, fork, take, put } from 'redux-saga/effects';
import * as taskConstants from '../constants/task';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants/index';
import { fetchListTaskSuccess, fetchListTaskFail } from '../actions/task';

/*
B1: Thực thi action FETCH_TASKS
B2: Gọi API
B2.1: Hiện thị thanh tiến trình (loading)
B3: Kiểm tra STATUS_CODE
B4: Tắt loading
B5: Thực thi các công việc tiếp theo
*/

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskConstants.FETCH_TASKS); // take - truyen vao hanh dong, chi theo doi action fetch_task 1 lan dau tien, neu muon theo doi nhieu dung lap vo han
    const resp = yield call(getList); // call - truyen vao ham api
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      // dispatch action fetchListTaskSuccess
      yield put(fetchListTaskSuccess(data)); //put - truyen vao ham thuc hien hanh dong
    } else {
      // dispatch action fetchListTaskFail
      yield put(fetchListTaskFail(data));
    }
  }
}

function* watchCreateTaskAction() {
  yield true;
  console.log('watching create task action');
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction); // fork - truyen vao function*
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
