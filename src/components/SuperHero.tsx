import React from 'react';
import {type HeroPropsType} from './props.d';

export const SuperHero = function (props: HeroPropsType) {
	return (
		<div>
			<p>
				my name is
				<b>
					{props.name} {props.lastName}
				</b>
					and my powers is <b>{props.powers}</b>

			</p>

		</div>
	);
};
