import React from 'react';
import Welcome from './components/Welcome';
import {UserProvider} from './components/userContext';
import ChildComponent from './components/ChildComponent';

function App() {
	return <div className='app'>
		<UserProvider value={'Nitin kukreti'}>
			<Welcome/>
			<ChildComponent/>
		</UserProvider>
	</div>;
}

export default App;
