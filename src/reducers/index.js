import { combineReducers } from 'redux';
import todolistReducer from './todolistReducer.js';
import otherReducer from './otherReducer.js';

export default combineReducers({
	todolist : todolistReducer,
	other : otherReducer
});