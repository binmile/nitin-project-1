import React from 'react';
import {type PersonInterface} from './interface';
import {Person} from './Person';
import {names} from '../utils/constants';

export const NameList: React.FC = function () {
	return (
		<div>
			{names.map((person: PersonInterface, idx: number) => (
				<Person
					age={person.age}
					gender={person.gender}
					name={person.name}
					skills={person.skills}
					key={idx}
				/>
			))}
		</div>
	);
};
