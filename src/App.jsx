import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

export default function App() {
	const [items, setItems] = useState(['Potatoes', 'Milk', 'Cheese']); // Lägg till state för items här

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
