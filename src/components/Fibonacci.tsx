/* eslint-disable no-mixed-spaces-and-tabs */
import React, {useMemo, useState} from 'react';

export const Fibonacci = () => {
	const fibNumber = 40;
	const [message, toggleMessage] = useState('hello');
	const fibonacciNumber: number = useMemo(() => {
		function f(n: number): number {
			return (n <= 1) ? n : f(n - 1) + f(n - 2);
	  }

	  return f(fibNumber);
	}, [fibNumber]);
	return <div>Fib {message}  {fibonacciNumber}
		<button onClick={() => {
			toggleMessage(state => state === 'hello' ? 'by' : 'hello');
		}}>toggle message</button></div>;
};
