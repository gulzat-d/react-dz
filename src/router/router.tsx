import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from '../pages/NotFound/NotFound';
import { Layout } from '../layout/Menu/Layout';
import Films from '../components/Films/Films';
import Authorization from '../components/Authorization/Authorization';
import Search from '../components/Search/Search';
import { Favorites } from '../components/Favorites/Favorites';
import { FilmInfo } from '../components/FilmInfo/FilmInfo';

export const router = createBrowserRouter([
	{
		path: '/',
		element: < Layout />,
		children: [
			{
				path: '/',
				element: <Search />,
				children: [
					{
						path: '/films',
						element: <Films />
					}
				]
			},
			{
				path: '/login',
				element: <Authorization />
			},
			{
				path: '/favorites',
				element: <Favorites />
			},
			{
				path: '/movie/:id',
				element: <FilmInfo />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
]);