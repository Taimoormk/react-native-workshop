import * as types from '../constants';

export const incrementCounterAction = () => ({
  type: types.INCREMENT_COUNTER,
});

export const fetchGitHubUserSuccessAction = data => ({
  type: types.FETCH_GITHUB_USER_SUCCESS,
  payload: data
});

export const fetchGitHubUserFailAction = err => ({
  type: types.FETCH_GITHUB_USER_FAIL,
  payload: err
});

export const fetchGitHubUserAttemptAction = username => {
  const thunk = async function thunk(dispatch) {
    try {
      const data = await fetch('GET', `https://api.github.com/users/${username}`);
      const result = data.json();
      dispatch(fetchGitHubUserSuccessAction(result));
    } catch (err) {
      dispatch(fetchGitHubUserFailAction(err));
    }
  };
  return thunk;
};
