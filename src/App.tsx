import React from 'react';
import {RouteManager} from './routes/RouteManager';
import {BrowserRouter} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<RouteManager />
		</BrowserRouter>
	);
}

export default App;
