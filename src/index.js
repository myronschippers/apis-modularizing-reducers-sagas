import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers/_root.reducer';
import rootSaga from './redux/sagas/_root.saga';

// creating saga middleware
const sagaMiddleware = createSagaMiddleware();

// creating a list of middleware to use with redux
let middlewareList = [
  sagaMiddleware,
  logger,
];

if (process.env.NODE_ENV === 'production') {
  middlewareList = [
    sagaMiddleware,
  ];
}

// This is creating the store
// the store is a big JavaScript Object that holds all of our reducers
const storeInstance = createStore(
  // This function registers all of our reducers
  rootReducer,
  applyMiddleware(...middlewareList),
);

// TODO - run sagas
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
