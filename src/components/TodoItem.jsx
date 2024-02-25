import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';
import '../assets/styles/todoItem.css';

export default function TodoItem({ items }) {
	return (
		<>
			{items.map((item) => (
				<li key={item.id}>
					<CheckBox />
					<p className='list-item'>{item.text}</p>
				</li>
			))}
		</>
	);
}

TodoItem.propTypes = {
	items: PropTypes.array.isRequired,
};
