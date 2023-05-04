import { routes } from 'Pages/Routes';
import React from 'react';
import type { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(routes);

export const App: FC = () => <RouterProvider router={router} />;
