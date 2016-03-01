import Link from '../components/Link'
import {setVisibilityFilter} from '../actions'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	return {
		active: 
			state.filter === ownProps.filter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
	}
}

const FilterLink = connect(mapStateToProps, 
													mapDispatchToProps)
													(Link)

export default FilterLink