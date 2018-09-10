import TodoList from '../components/TodoList'
import { addTodo } from '../store/actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
	todos: state.allTodos,
	showStatus: state.showStatus
})

const mapDispatchToProps = dispatch => ({
	onAdd(todo) {
		dispatch(addTodo(todo))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)