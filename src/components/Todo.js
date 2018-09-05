import React, { Component } from 'react'
import { MdRemoveCircleOutline, MdCheckCircle } from 'react-icons/md'
import '../styles/Todo.css'

export default class Todo extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="todo-container">
				<div className="todo">
					<p className="todo-text">
						<span className="todo-icon">{MdRemoveCircleOutline()}</span>
						<span className="todo-icon">{MdCheckCircle()}</span>
						{ this.props.text }
					</p>
				</div>
			</div>
		)
	}
}