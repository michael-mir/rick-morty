import { combineReducers } from 'redux';

import { ENTITIES } from '/common/constants/redux';

import charactersReducer from './characters';
import episodesReducer from './episodes';
import locationsReducer from './locations';

const globalReducer = combineReducers({
  [ENTITIES.CHARACTERS]: charactersReducer,
  [ENTITIES.LOCATIONS]: locationsReducer,
  [ENTITIES.EPISODES]: episodesReducer,
});

export default globalReducer;
