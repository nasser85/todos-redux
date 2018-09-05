import React, { Component } from 'react'

import Todo from './Todo'
import '../styles/TodoList.css'

export default class TodoList extends Component {
	constructor(props) {
		super(props)
		this.renderTodo = this.renderTodo.bind(this)
	}
	renderTodo(todo, index) {
		return (
			<Todo id={index}
				  key={index}
				  text={todo.task} 
				  status={todo.status}></Todo>
		)
	}
	render() {
		return (
			<div className="todo-list-wrapper">
				<div className="todo-list-container">
					{this.props.todos.map(this.renderTodo)}
				</div>
			</div>
		)
	}
}
