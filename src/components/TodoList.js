import React, {PropTypes} from 'react'
import Todo from './Todo'

const propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
		id: PropTypes.number.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

const TodoList = ({todos, onTodoClick}) => {
	console.log('TodoList', todos)
	return (
		<ul>
			{todos.map(t => 
				<Todo key={t.id} 
							{...t}
							onClick={() => onTodoClick(t.id)} />)}
		</ul>
		);
}

TodoList.propTypes = propTypes

export default TodoList