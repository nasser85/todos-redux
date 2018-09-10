import React, { Component } from 'react'
import { MdRemoveCircleOutline, MdCheckCircle, MdCreate, MdCheck } from 'react-icons/md'
import '../styles/Todo.css'

export default class Todo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			editing: false
		}
		Object.getOwnPropertyNames(Object.getPrototypeOf(this)).forEach(method => {
			this[method] = this[method].bind(this)
		})
	}
	componentDidUpdate() {
		if (this.state.editing) {
			let input = document.getElementById(`input-${this.props.id}`)
			input.focus()
			input.addEventListener('blur', this.onBlur)
		}
	}
	onBlur(e) {
		if (this.state.editing) {
			this.completeEdit(e.currentTarget.value)
		}
	}
	toggleComplete() {
		this.props.onEdit({
			id: this.props.id,
			task: this.props.task,
			isComplete: !this.props.isComplete
		})
	}
	removeTodo() {
		this.props.onRemove(this.props.id)
	}
	startEdit() {
		this.setState({ editing: true })
	}
	completeEdit(newTask) {
		this.props.onEdit({
			id: this.props.id,
			task: newTask,
			isComplete: this.props.isComplete
		})
		document.getElementById(`input-${this.props.id}`).removeEventListener('blur', this.onBlur)
		this.setState({ editing: false })
	}
	render() {
		return (
			<div className="todo-container">
				<div className="todo">
					<p className="todo-text">
						<span onClick={this.removeTodo}
						      className="todo-icon">{ MdRemoveCircleOutline() }</span>
						<span onClick={this.startEdit}
						      className="todo-icon">{ MdCreate() }</span>
						<span onClick={this.toggleComplete}
						      className="todo-icon">{ this.props.isComplete ? MdCheckCircle() 
						      	                                            : MdCheck() }</span>
						{ !this.state.editing ? <span>{this.props.task}</span>
						                      : <input id={`input-${this.props.id}`}
						                               defaultValue={this.props.task}></input> }
					</p>
				</div>
			</div>
		)
	}
}