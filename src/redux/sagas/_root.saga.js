import { takeEvery } from 'redux-saga/effects';

import postElement from './postElement.saga';
import getElements from './getElements.saga';
import firstSaga from './first.saga';

// TODO - watch for saga dispatches
function* watchSaga() {
  // register all of our sagas
  yield takeEvery('FIRST_SAGA', firstSaga);
  yield takeEvery('GET_ELEMENTS', getElements);
  yield takeEvery('POST_ELEMENT', postElement);
}

export default watchSaga;