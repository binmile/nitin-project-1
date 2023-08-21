import React from 'react';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import ButtonClickCounter from './components/ButtonClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
	return <div className='app'>
		<Welcome/>
		<Counter Component={ButtonClickCounter}/>
		<Counter Component={HoverCounter}/>
	</div>;
}

export default App;
