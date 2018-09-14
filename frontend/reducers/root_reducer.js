import { combineReducers } from 'redux';
import { errorsReducer } from './errors_reducer';
import { entitiesReducer } from './entities_reducer';
import { sessionReducer } from './session_reducer';
import { uiReducer} from './ui_reducer.js';

const rootReducer = combineReducers({
  errors: errorsReducer,
  entities: entitiesReducer,
  session: sessionReducer,
  ui: uiReducer
});

export default rootReducer;
