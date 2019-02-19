import types from '../actions/types';

export default (state = 1, action) => {
  switch (action.type) {
    case types.OTHER_FUNC:
      return state+1;
    default:
      return state;
  }
};