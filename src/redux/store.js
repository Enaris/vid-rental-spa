import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import RootReducer from './root-reducer';
import RootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [ logger, sagaMiddleware ];

const store = createStore(RootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(RootSaga);

export default store;