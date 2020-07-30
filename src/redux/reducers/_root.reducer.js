import { combineReducers } from 'redux';
import firstReducer from './first.reducer';
import secondReducer from './second.reducer';
import elementListReducer from './elementLit.reducer';

const rootReducer = combineReducers({
  firstReducer,
  secondReducer,
  elementListReducer,
});


export default rootReducer;