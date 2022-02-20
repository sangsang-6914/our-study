import { combineReducers } from 'redux';
import loginInfo from './loginInfo'
import counter from './counter'

const rootReducer = combineReducers({
  loginInfo,
  counter
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
