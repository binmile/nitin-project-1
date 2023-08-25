import React, {useContext} from 'react';
import {Context} from '../common/ThemeContext';
import {Theme} from '../common/type.d';

export const ThemeChangingComponent: React.FC = () => {
	const [value, changeTheme] = useContext(Context);
	return (
		<div className={value === Theme.LIGHT ? 'text-black' : 'bg-black text-white'}><p>ThemeChangingComponent {value}</p>
			<div>
				<button onClick={() => {
					changeTheme(Theme.LIGHT);
				}}
				disabled={value === Theme.LIGHT}>light</button>
				<button onClick={() => {
					changeTheme(Theme.DARK);
				}}
				disabled={value === Theme.DARK}>dark</button>
			</div>

		</div>

	);
};
