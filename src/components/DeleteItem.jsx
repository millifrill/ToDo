import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/deleteItem.css';

export default function DeleteItem({ id, deleteItem }) {
	return (
		<button className='delete-btn' onClick={() => deleteItem(id)}>
			Delete
		</button>
	);
}

DeleteItem.propTypes = {
	id: PropTypes.string.isRequired,
	deleteItem: PropTypes.func.isRequired,
};
