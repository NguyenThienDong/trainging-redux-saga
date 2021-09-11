/* eslint-disable spaced-comment */
import {
  call,
  fork,
  take,
  put,
  delay,
  takeLatest,
  select,
  takeEvery,
} from 'redux-saga/effects';
import * as taskConstants from '../constants/task';
import { addTask, getList } from '../apis/task';
import { STATUSES, STATUS_CODE } from '../constants/index';
import {
  fetchListTask,
  fetchListTaskSuccess,
  fetchListTaskFail,
  filterTaskSuccess,
  addTaskSuccess,
  addTaskFail,
} from '../actions/task';
import { hiddenLoading, showLoading } from '../actions/ui';
import { hideModal } from '../actions/modal';

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
    const action = yield take(taskConstants.FETCH_TASKS); // take - truyen vao hanh dong, chi theo doi action fetch_task 1 lan dau tien, neu muon theo doi nhieu dung lap vo han
    yield put(showLoading());
    const { params } = action.payload;
    const resp = yield call(getList, params); // call - truyen vao ham api
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      // dispatch action fetchListTaskSuccess
      yield put(fetchListTaskSuccess(data)); //put - truyen vao ham thuc hien hanh dong
    } else {
      // dispatch action fetchListTaskFail
      yield put(fetchListTaskFail(data));
    }
    yield delay(1000);
    yield put(hiddenLoading());
  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(
    fetchListTask({
      q: keyword
    }),
  );
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].value,
  });
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFail(data));
  }
  yield delay(1000);
  yield put(hiddenLoading());
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction); // fork - truyen vao function*
  yield takeLatest(taskConstants.FILTER_TASKS, filterTaskSaga); //Thay takeLatest = takeEvery để thử.
  yield takeEvery(taskConstants.ADD_TASK, addTaskSaga);
}

export default rootSaga;
