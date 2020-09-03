import { combineReducers } from 'redux';

import chartReducer from './chart/reducer';

const reducers = combineReducers({
  chartReducer,
});

export default reducers;
