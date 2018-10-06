import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import counterReducer from './modules/Counter';
import thunk from 'redux-thunk';

export default () => (
  createStore(
    combineReducers({
      counter: counterReducer,
    }),
    applyMiddleware(
      logger,
      thunk,
    )
  )
);
