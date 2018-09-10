import React, { Component } from 'react'

import '../styles/Filter.css'

import FilterItem from '../containers/FilterItemContainer'
import { MdList, MdCheckCircle, MdSchedule } from 'react-icons/md'

export default class Filter extends Component {
	constructor(props) {
		super(props)
		this.renderFilterItem = this.renderFilterItem.bind(this)
	}
	renderFilterItem(item, index) {
		return (
			<FilterItem key={index}
			            image={item.image}
			            label={item.label}></FilterItem>
		)
	}
	render() {
		let items = [
			{
				image: MdList,
				label: "All"
			}, 
			{
				image: MdCheckCircle,
				label: "Completed"
			},
			{
				image: MdSchedule,
				label: "Incomplete"
			}
		]
		return (
			<div className="filter-wrapper">
				<div className="icon-wrapper">
					{ items.map(this.renderFilterItem) }
				</div>
			</div>
		)
	}
}