import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Repos from './reducers';
import  '../src/componentStyle.css';

const defaultState = {
  repos: {
  },
  repoOrder: [
  ],
  commits: {
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  Repos,
  defaultState,
  composeEnhancers(
    applyMiddleware(thunk),
  )
)

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('app')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/App', () => render(App));
}
