import * as taskApis from '../apis/task';
import * as taskConstants from '../constants/task';

const fetchListTask = () => ({
  type: taskConstants.FETCH_TASKS,
});

const fetchListTaskSuccess = (data) => ({
  type: taskConstants.FETCH_TASKS_SUCCESS,
  payload: {
    data,
  },
});

const fetchListTaskFail = (error) => ({
  type: taskConstants.FETCH_TASKS_FAIL,
  payload: {
    error,
  },
});

export const fetchListTaskRequest = () => (dispatch) => {
  dispatch(fetchListTask());
  taskApis
    .getList()
    .then((res) => dispatch(fetchListTaskSuccess(res.data)))
    .catch((error) => dispatch(fetchListTaskFail(error)));
};
