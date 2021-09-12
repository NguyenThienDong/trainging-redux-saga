import * as uiTypes from '../constants/ui';

export const showLoading = () => ({
  type: uiTypes.SHOW_LOADING,
});

export const hiddenLoading = () => ({
  type: uiTypes.HIDDEN_LOADING,
});

export const showSidebar = () => ({
  type: uiTypes.SHOW_SIDEBAR,
});

export const hideSidebar = () => ({
  type: uiTypes.HIDE_SIDEBAR,
});
