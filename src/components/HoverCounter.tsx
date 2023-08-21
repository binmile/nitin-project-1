import React from 'react';
import {type DerivedCounterType} from './type';
import counter from './counter';

const HoverCounter: React.FC<DerivedCounterType> = ({
	count,
	increment,
}: DerivedCounterType) => (
	<div onMouseOver={increment}>Clicked {count} times</div>
);

export default counter({Component: HoverCounter});
