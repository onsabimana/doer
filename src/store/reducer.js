import { combineReducers } from 'redux';
import app from './app/reducer';
import todo from './todo/reducer';


const rootReducer = combineReducers({
  app,
  todo
});

export default rootReducer;
