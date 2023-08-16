import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Counter = function () {
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<div>Counter-{count}</div>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>

		</div>
	);
};

Counter.propTypes = {};

export default Counter;
