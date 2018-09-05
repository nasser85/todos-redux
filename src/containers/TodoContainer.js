import TodoList from '../components/Todo'
import { editTodo, removeTodo } from '../store/actions'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
	onEdit(todo) {
		dispatch(editTodo(todo))
	},
	onRemove(id) {
		dispatch(removeTodo(id))
	}
})

export default connect(null, mapDispatchToProps)(TodoList)