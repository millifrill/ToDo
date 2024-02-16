import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/todoList.css';
import TodoItem from './TodoItem';

export default function TodoList({ items }) {
	return (
		<ul className='list'>
			<TodoItem items={items} />
		</ul>
	);
}

TodoList.propTypes = {
	items: PropTypes.array.isRequired,
};
