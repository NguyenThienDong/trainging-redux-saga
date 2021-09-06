import { combineReducers } from '@reduxjs/toolkit';
import taskReducer from './task';

const rootReducer = combineReducers({
  task: taskReducer,
});

export default rootReducer;
