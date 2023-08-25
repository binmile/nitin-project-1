export type ThemePropsType = {
	children: React.ReactNode;
};

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

export type ContextState = [Theme, (theme: Theme) => void];

