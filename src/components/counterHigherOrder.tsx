import React from 'react';
import {useState} from 'react';
import {type CounterType, type CounterState} from './type';

const counter = ({Component}: CounterType) => {
	const Counter = () => {
		const [counter, setCount] = useState<CounterState>({count: 0});
		const increment = () => {
			setCount({count: counter.count + 1});
		};

		return <Component count={counter.count} increment={increment} />;
	};

	return Counter;
};

export default counter;
