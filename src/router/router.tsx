import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from '../pages/NotFound/NotFound';
import { Layout } from '../layout/Menu/Layout';
import Authorization from '../components/Authorization/Authorization';
import Search from '../components/Search/Search';
import { Favorites } from '../components/Favorites/Favorites';
import { FilmInfo } from '../components/FilmInfo/FilmInfo';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Authorization />
	},
	{
		path: '/main',
		element: < Layout />,
		children: [
			{
				path: '/main',
				element: <Search />
			},
			{
				path: '/main/favorites',
				element: <Favorites />
			},
			{
				path: '/main/movie/:id',
				element: <FilmInfo />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
]);