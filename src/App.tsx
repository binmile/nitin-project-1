/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './App/store';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HomeScreen} from './screens/Home/HomeScreen';
import ScoreScreen from './screens/Score/ScoreScreen';
function App() {
	return <div className='app'>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomeScreen/>}/>
					<Route path='score' element={<ScoreScreen/>}/>
				</Routes>
			</BrowserRouter>
		</Provider>
	</div>;
}

export default App;
