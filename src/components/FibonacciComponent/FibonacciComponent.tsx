import React, {useMemo, useState} from 'react';

export const FibonacciComponent = () => {
	const fibNumber = 40;
	const [message, setMessage] = useState('hello');
	const fibonacciNumber: number = useMemo(() => {
		function f(n: number): number {
			return n <= 1 ? n : f(n - 1) + f(n - 2);
		}

		return f(fibNumber);
	}, [fibNumber]);
	return (
		<div>
			<p>
				Fib {message} {fibonacciNumber}
			</p>
			<button
				onClick={() => {
					setMessage(state => (state === 'hello' ? 'by' : 'hello'));
				}}
			>
        toggle message
			</button>
		</div>
	);
};
