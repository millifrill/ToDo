import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/todoList.css';

export default function TodoList({ items }) {
	return (
		<ul className='list'>
			{items.map((item) => (
				<li key={item.id}>{item.text}</li>
			))}
		</ul>
	);
}

TodoList.propTypes = {
	items: PropTypes.array.isRequired,
};
