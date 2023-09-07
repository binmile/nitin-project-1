import React from 'react';
import {type DerivedCounterType} from './type';
import counter from './counterHigherOrder';

const HoverCounter: React.FC<DerivedCounterType> = ({count, increment}) => (
	<div onMouseOver={increment}>Clicked {count} times</div>
);

export default counter({Component: HoverCounter});
