import { routes } from 'Pages/Routes';
import type { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from 'Widgets/Header';
import './style.scss';
import { withProviders } from './Providers';

const router = createBrowserRouter(routes);

const App: FC = () => (
	<>
		<Header />
		<RouterProvider router={router} />
	</>
);
export default withProviders(App);
