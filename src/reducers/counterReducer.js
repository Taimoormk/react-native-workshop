import * as types from '../constants';

const initial = {
  counter: 0,
};

export default (state = initial, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return { ...state, counter: ++state.counter };
    default:
      return state;
  }
};
