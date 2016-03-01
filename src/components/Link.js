import React, {PropTypes} from 'react'

const propTypes = {
	active: PropTypes.bool.isRequired,
	onClick:PropTypes.func.isRequired,
	children:PropTypes.node.isRequired
}

const Link = ({active, onClick, children}) => {
	if(active){
		return <span>children</span>
	}

	return (
			<a href="#"
				onClick={(e) => {
				e.preventDefault()
				onClick()
			}}>
				{children}
			</a>
		)
}

Link.propTypes = propTypes

export default Link