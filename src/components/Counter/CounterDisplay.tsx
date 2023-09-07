/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import {useSelector} from 'react-redux';
import {type RootState} from '../../App/store';

export const CounterDisplay = () => {
	const count = useSelector((state: RootState) => state.counter.value);
	return (
		<div>CounterDisplay count = {count}</div>
	);
};
