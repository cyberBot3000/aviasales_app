import React from 'react';
import { HomePage } from 'Pages/Home';
import type { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
	{
		element: <HomePage />,
		path: '/',
	},
];
