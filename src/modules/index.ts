import { combineReducers } from 'redux';
import loginInfo from './loginInfo'
import selectMenu from './selectMenu';

const rootReducer = combineReducers({
  loginInfo,
  selectMenu,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
