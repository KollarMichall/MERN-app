import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import  thunk  from 'redux-thunk'
import  reducer  from './reducers/index'

import './index.css';
import App from './App';


const store = createStore(reducer, compose(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
  );
  

