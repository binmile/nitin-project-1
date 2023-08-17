import React from 'react';
import {type HeroPropsType} from './props.d';

export const SuperHero = function ({name, lastName, powers}: HeroPropsType) {
	return (
		<div>
			<p>
				my name is
				<b>
					{name} {lastName}
				</b>
					and my powers is <b>{powers}</b>

			</p>

		</div>
	);
};
