import React from 'react';
import Welcome from './components/Welcome';
import {PortalComponent} from './components/PortalComponent';

function App() {
	return <div className='app'>
		<Welcome/>
		<PortalComponent/>
	</div>;
}

export default App;
