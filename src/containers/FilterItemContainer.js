import FilterItem from '../components/FilterItem'
import { filter } from '../store/actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
	showStatus: state.showStatus
})

const mapDispatchToProps = dispatch => ({
	onFilter(filterStatus) {
		dispatch( filter(filterStatus) )
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem)