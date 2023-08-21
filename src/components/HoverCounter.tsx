import React from 'react';
import {type DerivedCounterType} from './type';

const HoverCounter: React.FC<DerivedCounterType> = ({count, increment}: DerivedCounterType) => (
	<div onMouseOver={increment}>
      Clicked {count} times
	</div>
);

export default HoverCounter;
