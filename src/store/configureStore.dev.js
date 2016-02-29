import {createStore, compose} from 'redux'
import DevTools from '../containers/DevTools'
import reducers from '../reducers'

const enhancer = compose(DevTools.instrument())

export default function configureStore(initialState) {
	console.log('In Configure Store');
 const store = createStore(reducers, initialState, enhancer)
 return store;
}

// export default configureStore