import * as taskConstants from '../constants/task';
import { toastError, toastSuccess } from '../commons/Helper/toast';

const initialState = {
  listTask: [],
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case taskConstants.FETCH_TASKS:
      return {
        ...state,
        listTask: [],
      };
    case taskConstants.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        listTask: payload.data,
      };
    case taskConstants.FETCH_TASKS_FAIL:
      toastError(payload.error);
      return {
        ...state,
        listTask: [],
      };
    case taskConstants.FILTER_TASKS_SUCCESS: {
      const { data } = payload;
      return {
        ...state,
        listTask: data,
      };
    }
    case taskConstants.ADD_TASK:
      return { ...state };

    case taskConstants.ADD_TASK_SUCCESS: {
      const { data } = payload;
      toastSuccess('Thêm công việc thành công!');
      return {
        ...state,
        listTask: [data].concat(state.listTask),
      };
    }
    case taskConstants.ADD_TASK_FAIL: {
      const { error } = payload;
      toastError(error);
      return { ...state };
    }

    default:
      return state;
  }
};

export default reducer;
