import React from 'react';
import Welcome from './components/Welcome';
import {FibonacciComponent} from './components/FibonacciComponent/FibonacciComponent';

function App() {
	return <div className='app'>
		<Welcome/>
		<FibonacciComponent/>
	</div>;
}

export default App;
