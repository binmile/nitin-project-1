import React from 'react';
import {type DerivedCounterType} from './type';
import counter from './counterHigherOrder';

const ButtonClickCounter: React.FC<DerivedCounterType> = ({
	count,
	increment,
}) => <button onClick={increment}>Clicked {count} times</button>;

export default counter({Component: ButtonClickCounter});
