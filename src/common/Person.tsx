import React from 'react';
import {type PersonInterface} from './interface';

export const Person: React.FC<PersonInterface> = function ({age, gender, name, skills}: PersonInterface) {
	return (
		<div>
			<h2>{name}</h2>
			<p>age : {age}</p>
			<p>gender : {gender}</p>
			<p>skills : {skills}</p>
		</div>
	);
};
