import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import Page from './ui/page/cnt-page';
import rootReducer from './reducers/index'

const initState = {}

const store = createStore(rootReducer, initState);

ReactDOM.render(
  <Provider store = {store}>
    <Page />
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
