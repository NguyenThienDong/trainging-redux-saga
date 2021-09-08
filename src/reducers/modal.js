import * as modalTypes from '../constants/modal';

const initialState = {
  showModal: false,
  title: '',
  component: null,
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case modalTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };

    case modalTypes.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      };

    case modalTypes.CHANGE_MODAL_TITLE:
      return {
        ...state,
        title: payload.title,
      };

    case modalTypes.CHANGE_MODAL_CONTENT:
      return {
        ...state,
        component: payload.component,
      };

    default:
      return state;
  }
};

export default reducer;
