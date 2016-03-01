import React, {PropTypes} from 'react'

const propTypes = {
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	onClick:PropTypes.func.isRequired
}

const Todo = ({onClick, text, completed}) => {
	return (
		<li onClick={onClick} 
				style={{textDecoration: completed?'line-through':'none'}}>
			{text}
		</li>
		)
}

Todo.propTypes = propTypes

export default Todo