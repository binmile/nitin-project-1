import React from 'react';
import Welcome from './components/Welcome';
import ButtonClickCounter from './components/ButtonClickCounter';
import HoverCounter from './components/HoverCounter';
import {PortalComponent} from './components/PortalComponent';

function App() {
	return (
		<div className='app'>
			<Welcome />
			<ButtonClickCounter />
			<HoverCounter />
			<PortalComponent />
		</div>
	);
}

export default App;
