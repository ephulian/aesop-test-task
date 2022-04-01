import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Store/cart';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles/Root/Global.css';
import { Provider } from 'react-redux';

const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
