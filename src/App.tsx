import React from 'react';
import {ThemeContext} from './common/ThemeContext';
import {ThemeChangingComponent} from './components/ThemeChangingComponent';

function App() {
	return <div className='app'>
		<ThemeContext >
			<ThemeChangingComponent/>
		</ThemeContext>
	</div>;
}

export default App;
