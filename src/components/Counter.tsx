import React from 'react';
import {useState} from 'react';
import {type CounterType, type CounterState} from './type';

const Counter: React.FC<CounterType> = ({Component}: CounterType) => {
	const [counter, setCount] = useState<CounterState>({count: 0});
	const increment = () => {
		setCount({count: counter.count + 1});
	};

	return <Component count={counter.count} increment={increment} />;
};

export default Counter;
