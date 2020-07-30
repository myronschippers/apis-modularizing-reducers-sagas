import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getElements(action) {
  try {
    const response = yield axios.get('/api/element');
    // represents dispatch
    yield put({
      type: 'SET_ELEMENTS',
      payload: response.data,
    });
    console.log(response);
  } catch(err) {
    console.log(err);
  }
}

export default getElements;