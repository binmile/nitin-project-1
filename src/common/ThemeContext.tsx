import React, {createContext, useState} from 'react';
import {type ContextState, Theme, type ThemePropsType} from './type.d';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Context = createContext<ContextState>([Theme.LIGHT, () => {}]);

const ThemeProvider = Context.Provider;

const ThemeContext: React.FC<ThemePropsType> = ({children}) => {
	const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
	const changeTheme = (theme: Theme) => {
		setTheme(theme);
	};

	return (<ThemeProvider value={[theme, changeTheme]}>;
		{children}
	</ThemeProvider>);
};

export {Context, ThemeContext};
