import { combineReducers } from 'redux';

import { teamReducer } from './team';
import { counterReducer } from './counter';

const reducers = combineReducers({
  counter: counterReducer,
  team: teamReducer,
});

export default reducers;
