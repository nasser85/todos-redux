import React, { Component } from 'react'

import { MdAdd } from 'react-icons/md'

import Todo from '../containers/TodoContainer'
import '../styles/TodoList.css'

export default class TodoList extends Component {
	constructor(props) {
		super(props)
		this.renderTodo = this.renderTodo.bind(this)
		this.filterTodos = this.filterTodos.bind(this)
		this.triggerAdd = this.triggerAdd.bind(this)
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
	triggerAdd() {
		let todo = window.prompt('Type in your new todo!')
		if ( todo != "" && todo != null) {
			this.props.onAdd({
				id: new Date().getTime(),
				task: todo,
				isComplete: false
			})
		}
	}
	render() {
		return (
			<div className="todo-list-wrapper">
				<div className="todo-list-container">
					{this.props.todos.filter(this.filterTodos).map(this.renderTodo)}
				</div>
				<span className="add-button" onClick={this.triggerAdd}>{ MdAdd() }</span>
			</div>
		)
	}
}
