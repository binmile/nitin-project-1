import React, {useState} from 'react';
import {CounterAction} from './actions';

const Counter = function () {
	const [count, setCount] = useState<number>(0);
	const counterActionHandler = function (action: CounterAction) {
		switch (action) {
			case CounterAction.Increment:
				setCount(count + 1);
				break;
			case CounterAction.Decrement:
				setCount(count - 1);
				break;
			default:
				break;
		}
	};

	return (
		<div>
			<div>Counter-{count}</div>
			<button onClick={() => {
				counterActionHandler(CounterAction.Increment);
			}}>Increment</button>
			<button onClick={() => {
				counterActionHandler(CounterAction.Decrement);
			}}>Decrement</button>

		</div>
	);
};

export default Counter;
