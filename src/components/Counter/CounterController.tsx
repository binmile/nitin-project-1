/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import React from 'react';
import {useDispatch} from 'react-redux';
import {decrement, increment, reset} from '../../feature/counter/counterSlice';

export const CounterController = () => {
	const dispatch = useDispatch();
	return (<div>
		<button onClick={() => dispatch(increment())}>increment</button>
		<button onClick={() => dispatch(decrement())}>decrement</button>
		<button onClick={() => dispatch(reset())}>reset</button>
	</div>
	);
};
