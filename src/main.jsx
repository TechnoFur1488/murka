import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { Root } from './routes/Root';
import { MainPage } from './components/MainPage/MainPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
    children: [
      {
        path: "/",
        element: <MainPage />
      }
    ]
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);