import C from './constants'
import { combineReducers } from 'redux'


export const allTodos = (state=[], action) => {
	switch (action.type) {
		case C.ADD_TODO:
			return [
				...state,
				action.payload
			]
		case C.REMOVE_TODO:
			return state.filter(todo => todo.id !== action.payload)
		case C.EDIT_TODO: 
			return state.map(todo => todo.id === action.payload.id ? action.payload : todo)
		default:
			return state
	}
}

export const showStatus = (state=null, action) =>
	action.type === C.FILTER ? action.payload
							 : state

export default combineReducers({
	allTodos,
	showStatus
})