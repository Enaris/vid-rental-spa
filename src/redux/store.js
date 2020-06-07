import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import RootReducer from './root-reducer';
import RootSaga from './root-saga';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [ logger, sagaMiddleware, routerMiddleware(history) ];

const store = createStore(
  RootReducer(history), 
  applyMiddleware(...middlewares));

sagaMiddleware.run(RootSaga);

export default store;