import React from 'react';
import PropTypes from 'prop-types';
import DeleteItem from './DeleteItem';

export default function TodoItem({ items }) {
	return (
		<div>
			{items.map((item) => (
				<li key={item.id}>
					<p>{item.text}</p>
					<div>
						<DeleteItem />
					</div>
				</li>
			))}
		</div>
	);
}

TodoItem.propTypes = {
	items: PropTypes.array.isRequired,
};
