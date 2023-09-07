import React from 'react';
import {CounterDisplay} from '../../components/Counter/CounterDisplay';
import {CounterController} from '../../components/Counter/CounterController';
import {Link} from 'react-router-dom';

export const HomeScreen = () => (
	<div>
		<CounterDisplay/>
		<CounterController/>
		<Link to='/score'>go to score screen</Link>
	</div>
);
