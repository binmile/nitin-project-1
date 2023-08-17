import React from 'react';
import {type PersonInterface} from './interface';
import {Person} from './Person';

export const NameList: React.FC = function () {
	const names: PersonInterface[] = [{name: 'John', age: 22, gender: 'male', skills: ['React', 'Angular']}, {name: 'Tina', age: 22, gender: 'female', skills: ['Vew', 'Angular']}, {name: 'Tim', age: 22, gender: 'male', skills: ['React', 'Angular', 'node']}];
	return <div>
		{names.map((person: PersonInterface, idx: number) => <Person age={person.age} gender={person.gender} name={person.name} skills={person.skills} key={idx} />)} </div>;
};
