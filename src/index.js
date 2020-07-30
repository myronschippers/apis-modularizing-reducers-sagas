import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import rootReducer from './redux/reducers/_root.reducer';
import rootSaga from './redux/sagas/_root.saga';

//
// SAGAS
// ------------------------------









// TODO - add saga middleware
const sagaMiddleware = createSagaMiddleware();

// This is creating the store
// the store is a big JavaScript Object that holds all of our reducers
const storeInstance = createStore(
    // This function registers all of our reducers
    rootReducer,
    applyMiddleware(sagaMiddleware, logger),
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
