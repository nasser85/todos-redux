import C from './constants'

export const addTodo = todo => ({
	type: C.ADD_TODO,
	payload: todo
})

export const removeTodo = todoId => ({
	type: C.REMOVE_TODO,
	payload: todoId
})

export const editTodo = todo => ({
	type: C.EDIT_TODO,
	payload: todo
})

export const filter = filterStatus => ({
	type: C.FILTER,
	payload: filterStatus
})