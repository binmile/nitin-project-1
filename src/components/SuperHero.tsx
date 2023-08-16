import React from 'react';

type PropsType = {
	name: string;
	lastName: string;
	powers: string;
};

export const SuperHero = function (props: PropsType) {
	return (
		<div>
			my name is {props.name} {props.lastName} and my powers is {props.powers}

		</div>
	);
};
