import { put } from 'redux-saga/effects';
import axios from 'axios';

function* postElement(action) {
  try {
    yield axios.post('/api/element', action.payload);
    // put = this.props.dispatch()
    yield put({
      type: 'GET_ELEMENTS'
    });
  } catch(err) {
    console.log(err);
  }
}

export default postElement;