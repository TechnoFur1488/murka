import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { Root } from './routes/Root/Root';
import { MainPage } from './components/MainPage/MainPage';
import { Reg } from './components/Reg/Reg';
import { We } from './components/We/We';
import { Curse } from './components/Curse/Curse';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: "/",
				element: <MainPage />
			},
			{
				path: "We",
				element: <We />
			},
			{
				path: "Curse",
				element: <Curse />
			}
		]

	},
	{
		path: "Reg",
		element: <Reg />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);