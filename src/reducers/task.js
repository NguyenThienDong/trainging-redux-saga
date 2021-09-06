import * as taskConstants from '../constants/task';

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
      return {
        ...state,
        listTask: [],
      };
    default:
      return state;
  }
};

export default reducer;
