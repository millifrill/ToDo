import React from 'react';
import '/src/assets/styles/newTodoForm.css';

const NewTodoForm = () => {
	return (
		<div className='container'>
			<input placeholder='Enter to do...' type='text' id='item' />
			<button>Add</button>
		</div>
	);
};

export default NewTodoForm;
