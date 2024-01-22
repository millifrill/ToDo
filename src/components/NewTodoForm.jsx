import React from 'react';
import '/src/assets/styles/newTodoForm.css';

const NewTodoForm = () => {
	return (
		<form className='container'>
			<input placeholder='Enter to do...' type='text' id='item' />
			<button className='add-btn'>Add</button>
		</form>
	);
};

export default NewTodoForm;
