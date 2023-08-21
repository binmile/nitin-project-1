import React from 'react';
import {type DerivedCounterType} from './type';
import counter from './counter';

const ButtonClickCounter: React.FC<DerivedCounterType> = ({
	count,
	increment,
}: DerivedCounterType) => (
	<button onClick={increment}>Clicked {count} times</button>
);

export default counter({Component: ButtonClickCounter});
