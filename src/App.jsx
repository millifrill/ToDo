import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewTodoForm from './components/NewTodoForm';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header />
			<NewTodoForm />
		</>
	);
}

export default App;
