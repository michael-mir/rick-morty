import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => composeWithDevTools(applyMiddleware(...middleware));

export const store = {
  ...createStore(rootReducer, bindMiddleware([sagaMiddleware])),
  sagaTask: sagaMiddleware.run(rootSaga),
};
