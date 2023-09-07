import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {routePath} from '../RoutePath';

const PublicRoutes = () => (
	<Routes>
		<Route {...routePath.Home} />
		<Route {...routePath.About} />
	</Routes>
);

export default PublicRoutes;
