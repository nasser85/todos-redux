import TodoList from '../components/TodoList'
import { editTodo, removeTodo } from '../store/actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
	todos: state.allTodos
})

const mapDispatchToProps = dispatch => ({
	onEdit(todo) {
		dispatch(editTodo(todo))
	},
	onRemove(id) {
		dispatch(removeTodo(id))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)