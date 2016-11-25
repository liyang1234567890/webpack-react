import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.js'

function reducer (state = {
	text: 'Hello fengnovo',
	name: 'fengnovo'
},action) {
	switch (action.type) {
		case 'change': 
			return {
				text: action.payload,
				name: 'Hello,'+ action.payload
			};
		default :
			return state;
	}
} 

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.body.appendChild(document.createElement('div'))
)