import React, { Component } from 'react'
import '../styles/FilterItem.css'

export default class FilterItem extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className={ this.props.isSelected ? "filter-item selected" : "filter-item"}>
				<div className="filter-image">{ this.props.image() }</div>
				<p className="filter-label"><small>{this.props.label}</small></p>
			</div>
		)
	}
}