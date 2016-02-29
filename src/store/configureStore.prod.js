import {createStore, compose} from 'redux'
import reducers from '../reducers'

export default function configureStore(initialState){

 const store = createStore(reducers, initialState, enhancer)
 return store;
}

// export default configureStore