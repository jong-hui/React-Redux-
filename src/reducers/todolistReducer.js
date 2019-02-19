import types from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODOLIST:
      return [...state, action.obj];
    default:
      return state;
  }
};