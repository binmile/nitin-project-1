import React from 'react';
import {type PersonInterface} from './interface';

export const Person: React.FC<PersonInterface> = function (props: PersonInterface) {
	return (
		<div>
			<h2>{props.name}</h2>
			<p>age : {props.age}</p>
			<p>gender : {props.gender}</p>
			<p>skills : {props.skills}</p>
		</div>
	);
};
