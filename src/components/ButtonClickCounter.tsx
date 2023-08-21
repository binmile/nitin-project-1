import React from 'react';
import {type DerivedCounterType} from './type';

const ButtonClickCounter: React.FC<DerivedCounterType> = ({count, increment}: DerivedCounterType) => (
	<button onClick={increment}>
      Clicked {count} times
	</button>
);

export default ButtonClickCounter;
