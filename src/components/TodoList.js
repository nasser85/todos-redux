import React, { Component } from 'react'

import Todo from '../containers/TodoContainer'
import '../styles/TodoList.css'

export default class TodoList extends Component {
	constructor(props) {
		super(props)
		this.renderTodo = this.renderTodo.bind(this)
	}
	renderTodo(todo, index) {
		return (
			<Todo id={todo.id}
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
