import React, { Component } from 'react'

import '../styles/Filter.css'

import FilterItem from './FilterItem'
import { MdList, MdCheckCircle, MdSchedule } from 'react-icons/md'

export default class Filter extends Component {
	constructor(props) {
		super(props)
		this.renderFilterItem = this.renderFilterItem.bind(this)
		this.isItemSelected = this.isItemSelected.bind(this)
	}
	isItemSelected(item) {
		switch(this.props.showStatus) {
			case this.props.showStatus === 'completed':
				return item.label === 'Completed'
			case this.props.showStatus === 'incomplete':
				return item.label === 'Incomplete'
			default:
				return item.label === 'All'
		}
	}
	renderFilterItem(item, index) {
		let currStatus = this.isItemSelected(item)
		return (
			<FilterItem key={index}
			            image={item.image}
			            label={item.label} 
			            isSelected={currStatus}></FilterItem>
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