import * as types from '../constants';

const initial = {
  loading: true,
  error: null,
  data: null,
};

export default (state = initial, action) => {
  switch (action.type) {
    case types.DASHBOARD_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case types.DASHBOARD_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
