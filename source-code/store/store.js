import {
	composeWithDevTools
}
from 'redux-devtools-extension'
import {
	createStore, applyMiddleware
}
from 'redux'
import {
	middleware
}
from '../middleware/middleware'
import Reducers from './reducer/combiner'

export const store = createStore(Reducers, composeWithDevTools(applyMiddleware(
	middleware)))
