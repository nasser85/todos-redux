import React, { Component } from 'react'
import '../styles/FilterItem.css'

const FilterItem = props => (
	<div className={ props.isSelected ? "filter-item selected" : "filter-item"}>
		<div className="filter-image">{ props.image() }</div>
		<p className="filter-label"><small>{ props.label }</small></p>
	</div>
)

export default FilterItem