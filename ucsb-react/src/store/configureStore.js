// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

export default function configureStore(initialState) {
  const middlewareRouter = routerMiddleware(browserHistory);
  const store = createStore(rootReducer, initialState, applyMiddleware(middlewareRouter, thunk));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
