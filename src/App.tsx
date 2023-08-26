import React from 'react';
import Welcome from './components/Welcome';
import { Fibonacci } from './components/Fibonacci';

function App() {
	return <div className='app'>
		<Welcome/>
		<Fibonacci/>
	</div>;
}

export default App;
