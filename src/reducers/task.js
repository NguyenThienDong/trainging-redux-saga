import * as taskConstants from '../constants/task';
import { toastError } from '../commons/Helper/toast';

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
    case taskConstants.FILTER_TASKS_SUCCESS:
      return {
        ...state,
        listTask: payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
