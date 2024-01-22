import React from 'react';
import '/src/assets/styles/todoList.css';

const TodoList = () => {
	return (
		<ul className='list'>
			<li>
				<label>
					<input type='checkbox' />
					Item 1
				</label>
				<button className='delete-btn'>Delete</button>
			</li>
			<li>
				<label>
					<input type='checkbox' />
					Item 2
				</label>
				<button className='delete-btn'>Delete</button>
			</li>
		</ul>
	);
};

export default TodoList;
