import C from './constants'
import appReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {
	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log(store.getState())
	console.log(next)
	let result = next(action)
	console.log(store.getState())
	console.log(action)
	return result;
}

export default (initialState={}) => applyMiddleware(consoleMessages)(createStore)(appReducer, initialState)