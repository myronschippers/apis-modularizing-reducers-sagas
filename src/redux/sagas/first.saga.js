function* firstSaga(action) {
  console.log('First Saga fired Off: ', action.payload);
}

export default firstSaga;