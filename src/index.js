import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import seedState from './initialState.json'
import storeFactory from './store'
import { Provider } from 'react-redux'

const initialState = localStorage['todoApp'] ? JSON.parse(localStorage['todoApp'])
                                             : seedState

const store = storeFactory(initialState)
window.React = React
window.store = store
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
