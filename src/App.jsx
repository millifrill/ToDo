import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/ToDoList';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header />
			<NewTodoForm />
			<TodoList />
		</>
	);
}

export default App;
