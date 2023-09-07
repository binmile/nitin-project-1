import React from 'react';
import {CounterDisplay} from '../../components/Counter/CounterDisplay';
import {Link} from 'react-router-dom';

const ScoreScreen = () => (
	<div>
		<CounterDisplay/>
		<Link to='/'>return to Home Screen</Link>
	</div>
);

export default ScoreScreen;
