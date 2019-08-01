import * as types from '../constants';
import axios from 'axios';
export const incrementCounterAction = () => ({
  type: types.INCREMENT_COUNTER,
});

export const fetchGitHubUserAttemptAction = () => ({
  type: types.FETCH_GITHUB_USER_ATTEMPT,
});

export const fetchGitHubUserSuccessAction = data => ({
  type: types.FETCH_GITHUB_USER_SUCCESS,
  payload: data
});

export const fetchGitHubUserFailAction = err => ({
  type: types.FETCH_GITHUB_USER_FAIL,
  payload: err
});

export const fetchGitHubUser = username => {
  const thunk = async function thunk(dispatch) {
    try {
      dispatch(fetchGitHubUserAttemptAction());
      const body = await axios(`https://api.github.com/users/${username}`);
      dispatch(fetchGitHubUserSuccessAction(body.data));
    } catch (err) {
      dispatch(fetchGitHubUserFailAction(err));
    }
  };
  return thunk;
};
