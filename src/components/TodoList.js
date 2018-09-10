import React, { Component } from 'react'

import Todo from '../containers/TodoContainer'
import '../styles/TodoList.css'

export default class TodoList extends Component {
	constructor(props) {
		super(props)
		this.renderTodo = this.renderTodo.bind(this)
		this.filterTodos = this.filterTodos.bind(this)
	}
	renderTodo(todo, index) {
		return (
			<Todo id={todo.id}
				  key={index}
				  task={todo.task} 
				  isComplete={todo.isComplete}></Todo>
		)
	}
	filterTodos(todo) {
		switch (this.props.showStatus) {
			case 'completed':
				return todo.isComplete
			case 'incomplete':
				return !todo.isComplete
			default:
				return true
		}
	}
	render() {
		return (
			<div className="todo-list-wrapper">
				<div className="todo-list-container">
					{this.props.todos.filter(this.filterTodos).map(this.renderTodo)}
				</div>
			</div>
		)
	}
}
