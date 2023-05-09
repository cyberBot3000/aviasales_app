import { routes } from 'Pages/Routes';
import type { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from 'Widgets/Header';
import './style.scss';

const router = createBrowserRouter(routes);

export const App: FC = () => (
	<>
		<Header />
		<RouterProvider router={router} />
	</>
);
