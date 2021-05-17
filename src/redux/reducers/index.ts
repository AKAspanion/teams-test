import { combineReducers } from 'redux';

import { teamReducer } from './team';
import { counterReducer } from './counter';
import { settingsReducer } from './settings';

const reducers = combineReducers({
  settings: settingsReducer,
  counter: counterReducer,
  team: teamReducer,
});

export default reducers;
