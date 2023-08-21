import React from 'react';
import Welcome from './components/Welcome';
import ButtonClickCounter from './components/ButtonClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
	return <div className='app'>
		<Welcome/>
		<ButtonClickCounter />
		<HoverCounter />
	</div>;
}

export default App;
