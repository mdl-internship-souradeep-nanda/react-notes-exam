import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from "redux-logger";
import promise from 'redux-promise-middleware';

import noteReducer from './Reducers/NoteReducer';

export default createStore(
  combineReducers({
    noteReducer,
  }),
  {},
  applyMiddleware(promise()),
);
