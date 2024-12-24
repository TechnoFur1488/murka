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
import { Provider } from 'react-redux';
import store from './app/store';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: "/",
				element: <MainPage />
			},
		]

	},
	{
		path: "Reg",
		element: <Reg />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);