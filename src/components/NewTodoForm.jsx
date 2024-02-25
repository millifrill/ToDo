import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import '../assets/styles/newTodoForm.css';

export default function NewTodoForm({ addItem }) {
	const [newItem, setNewItem] = useState('');
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newItemObject = {
			id: uuidv4(),
			text: newItem,
		};
		console.log(newItemObject);
		addItem(newItemObject);
		setNewItem('');
		inputRef.current.focus();
	};

	return (
		<form onSubmit={handleSubmit} className='container'>
			<input
				ref={inputRef}
				placeholder='Enter todo...'
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
				type='text'
				id='item'
			/>
			<button type='submit' className='add-btn'>
				Add
			</button>
		</form>
	);
}

NewTodoForm.propTypes = {
	addItem: PropTypes.func.isRequired,
};
