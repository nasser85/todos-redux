import React, { Component } from 'react'
import { MdRemoveCircleOutline, MdCheckCircle, MdCreate } from 'react-icons/md'
import '../styles/Todo.css'

export default class Todo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			editing: false
		}

		this.removeTodo = this.removeTodo.bind(this)
		this.startEdit = this.startEdit.bind(this)
		this.completeEdit = this.completeEdit.bind(this)
	}
	componentDidUpdate() {
		if (this.state.editing) {
			document.getElementById(`input-${this.props.id}`).focus()
		}
	}
	removeTodo() {
		this.props.onRemove(this.props.id)
	}
	startEdit() {
		this.setState({ editing: true })
	}
	completeEdit() {
		this.setState({ editing: false })
	}
	render() {
		return (
			<div className="todo-container">
				<div className="todo">
					<p className="todo-text">
						<span onClick={this.removeTodo} className="todo-icon">{MdRemoveCircleOutline()}</span>
						<span onClick={this.startEdit} className="todo-icon">{MdCreate()}</span>
						<span className="todo-icon">{MdCheckCircle()}</span>
						{ !this.state.editing ? <span>{this.props.text}</span> : <input id={`input-${this.props.id}`} defaultValue={this.props.text}></input> }
					</p>
				</div>
			</div>
		)
	}
}