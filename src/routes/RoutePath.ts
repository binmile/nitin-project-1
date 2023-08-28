/* eslint-disable @typescript-eslint/naming-convention */
import {About, Home} from '../screens/Screen';
import {type RouteType} from './type.d';
export const routePath: RouteType = {
	Home: {
		path: '/',
		Component: Home,
	},
	About: {
		path: '/about',
		Component: About,
	},
};
