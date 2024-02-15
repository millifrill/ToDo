import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/newTodoForm.css';

export default function NewTodoForm({ addItem }) {
	const [newItem, setNewItem] = useState('');
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newItemObject = {
			id: Date.now(),
			text: newItem,
		};
		addItem(newItemObject);
		setNewItem('');
		inputRef.current.focus();
	};

	return (
		<form onSubmit={handleSubmit} className='container'>
			<input
				ref={inputRef}
				placeholder='Enter to do...'
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
