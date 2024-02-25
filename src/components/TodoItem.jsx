import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';
import '../assets/styles/todoItem.css';
import DeleteItem from './DeleteItem';

export default function TodoItem({ items, deleteItem }) {
	return (
		<>
			{items.map((item) => (
				<li key={item.id}>
					<div>
						<CheckBox />
						<p className='list-item'>{item.text}</p>
					</div>
					<DeleteItem id={item.id} deleteItem={deleteItem} />
				</li>
			))}
		</>
	);
}

TodoItem.propTypes = {
	items: PropTypes.array.isRequired,
	deleteItem: PropTypes.func.isRequired,
};
