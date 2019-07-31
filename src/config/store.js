import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import rootReducer from '../reducers';

export default () => {
  // middleware configuration
  const middlewares = applyMiddleware(reduxThunk, reduxLogger);

  const store = createStore(rootReducer, middlewares)

  return store;
}