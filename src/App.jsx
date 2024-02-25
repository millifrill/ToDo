import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

export default function App() {
	const [items, setItems] = useState(() => {
		const localValue = localStorage.getItem('ITEMS');
		return localValue ? JSON.parse(localValue) : [];
	});

	useEffect(() => {
		localStorage.setItem('ITEMS', JSON.stringify(items));
	}, [items]);

	const addItem = (newItem) => {
		const newItemList = [...items, newItem];
		setItems(newItemList);
	};

	return (
		<>
			<Header />
			<NewTodoForm addItem={addItem} />
			<TodoList items={items} />
		</>
	);
}
