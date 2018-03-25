import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import redux_thunk from 'redux-thunk';
import api from './api';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(redux_thunk, api)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>
  , document.querySelector('.container'));