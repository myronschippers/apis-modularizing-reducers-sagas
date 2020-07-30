const elementListReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ELEMENTS':
      return action.payload;
    case 'CLEAR_ELEMENTS':
      return [];
    default:
      return state;
  }
};

export default elementListReducer;