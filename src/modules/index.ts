import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import locale from './locale';

const rootReducer = combineReducers({
  counter,
  todos,
  locale,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
