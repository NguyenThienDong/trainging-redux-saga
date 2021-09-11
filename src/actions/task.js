import * as taskApis from '../apis/task';
import { STATUSES } from '../constants';
import * as taskConstants from '../constants/task';

export const fetchListTask = (params = {}) => ({
  type: taskConstants.FETCH_TASKS,
  payload: {
    params,
  },
});

export const fetchListTaskSuccess = (data) => ({
  type: taskConstants.FETCH_TASKS_SUCCESS,
  payload: {
    data,
  },
});

export const fetchListTaskFail = (error) => ({
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

export const filterTask = (keyword) => ({
  type: taskConstants.FILTER_TASKS,
  payload: {
    keyword,
  },
});

export const filterTaskSuccess = (data) => ({
  type: taskConstants.FILTER_TASKS_SUCCESS,
  payload: {
    data,
  },
});

export const addTask = (title, description) => ({
  type: taskConstants.ADD_TASK,
  payload: {
    title,
    description,
  },
});

export const addTaskSuccess = (data) => ({
  type: taskConstants.ADD_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const addTaskFail = (error) => ({
  type: taskConstants.ADD_TASK_FAIL,
  payload: {
    error,
  },
});

export const setTaskEditing = (task) => ({
  type: taskConstants.SET_TASK_EDITING,
  payload: {
    task,
  },
});

export const updateTask = (title, description, status = STATUSES[0].value) => ({
  type: taskConstants.UPDATE_TASK,
  payload: {
    title,
    description,
    status,
  },
});

export const updateTaskSuccess = (data) => ({
  type: taskConstants.UPDATE_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const updateTaskFail = (error) => ({
  type: taskConstants.UPDATE_TASK_FAIL,
  payload: {
    error,
  },
});

export const deleteTask = (id) => ({
  type: taskConstants.DELETE_TASK,
  payload: {
    id,
  },
});

export const deleteTaskSuccess = (data) => ({
  type: taskConstants.DELETE_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const deleteTaskFail = (error) => ({
  type: taskConstants.DELETE_TASK_FAIL,
  payload: {
    error,
  },
});
