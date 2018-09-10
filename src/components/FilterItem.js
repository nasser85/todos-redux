import React, { Component } from 'react'
import '../styles/FilterItem.css'

export default class FilterItem extends Component {
	constructor(props) {
		super(props)
		this.selectFilter = this.selectFilter.bind(this)
	}
	selectFilter() {
		this.props.onFilter(this.props.label.toLowerCase())
	}
	render() {
		return (
			<div onClick={this.selectFilter} className={this.props.label.toLowerCase() == this.props.showStatus  ? "filter-item selected" : "filter-item"}>
				<div className="filter-image">{ this.props.image() }</div>
				<p className="filter-label"><small>{ this.props.label }</small></p>
			</div>
		)
	}
}
