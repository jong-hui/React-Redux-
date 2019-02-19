import types from './types.js';

export function addTodoList (obj) {
	return {
		type : types.ADD_TODOLIST,
		obj
	};
}