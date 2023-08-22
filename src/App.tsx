import React from 'react';
import Welcome from './components/Welcome';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
	return <div className='app'>
		<Welcome/>
		<PostForm/>
		<PostList/>
	</div>;
}

export default App;
