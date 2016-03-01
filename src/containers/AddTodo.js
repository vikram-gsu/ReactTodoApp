import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

const AddTodoComponent = ({dispatch}) => {
	let input

	return (
		<div>
			<form onSubmit= {(e) => {
										e.preventDefault()
										dispatch(addTodo(input.value))
										input.value=''			
									}}
			>
				<input ref= {node => {
											input = node
											}
										} />
				<button type='submit'>
					Add Todo
				</button>
			</form>
		</div>
		);


}

const AddTodo = connect()(AddTodoComponent)

export default AddTodo