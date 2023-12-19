import styles from './Favorites.module.css';
import { useDispatch, useSelector } from 'react-redux';
import CardFilm from '../CardFilm/CardFilm';
import Headline from '../Headline/Headline';
import { AppDispatch, RootState } from '../../store/store';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import { useEffect, useState } from 'react';
import { SearchResult } from '../../interfaces/searchResult.interface';

export function Favorites() {

	const [favoritesMovies, setFavoritesMovies] = useState<SearchResult[]>([]);
	const dispatch = useDispatch<AppDispatch>();
	const state = useSelector((s: RootState) => {
		const name = s.user.find(u => u.isLogined === true).name;
		if (!name) {
			return
		}
		return name;
	})

	const favoritesState = useSelector((s: RootState) => {
		return s.favorites;
	})

	const elements = favoritesState.find(u => u.nameUser === state);

	const getElements = async (id: string) => {
		const { data } = await axios.get(`${PREFIX}/${id}`, {
			headers: {
				'X-RapidAPI-Key': '6d0dc55e0emsh08bd4ba4945fa55p1dd689jsn808754589baf',
				'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
			}
		})
		return data;
	}

	const loadAllElements = async () => {
		try {
			const res = await Promise.all(elements.movies.map(i => getElements(i)));
			const newData = res.map(i => { return { ...i.results } });
			setFavoritesMovies(newData);
		} catch (e) {
			throw new Error('Не удалось загрузить данные');
		}
	}

	useEffect(() => {
		loadAllElements();
	}, [elements]);

	return (<div>
		<Headline title='Избранное' />
		<div className={styles.movies}>
			{favoritesMovies.map((m) => (
				<CardFilm
					key={m.id}
					name={m.titleText.text}
					rating={m.id[8]}
					poster={m.primaryImage.url}
					id={m.id}
				/>
			))}
		</div>
	</div>)
}