import React from 'react'
import {render} from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore();
	// {todos:
	// 															[{id:1, completed:false, text: 'Starbucks'}],
	// 														visibilityFilter: 'SHOW_ALL'});


render(<Root store={store} /> , document.getElementById('root'));
