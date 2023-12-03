import styles from './Search.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Paragraph from '../Paragraph/Paragraph';
import Headline from '../Headline/Headline';
import { Outlet } from 'react-router-dom';
import { JWT, PREFIX } from '../../helpers/API';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardFilm from '../CardFilm/CardFilm';
import { SearchResult } from '../../interfaces/searchResult.interface';

function Search() {
	const [movies, setMovies] = useState<SearchResult[]>([]);

	const getFilm = async (key: string) => {
		const options = {
			method: 'GET',
			// url: `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/love`,
			url: `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${key}`,
			headers: {
				'X-RapidAPI-Key': '6d0dc55e0emsh08bd4ba4945fa55p1dd689jsn808754589baf',
				'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
			}
		};
		try {
			const response = await axios.request(options);
			// console.log(response.data);
			const newData = response.data.results.filter(i => {
				return i.id != null && i.primaryImage != null && i.titleText != null
			})
			setMovies(newData);
		} catch (error) {
			console.error(error);
		}
	}

	const formSubmit = async (e) => {
		e.preventDefault();
		const form = e.target as typeof e.target & HTMLFormElement;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData);
		const keyword = data.movie as string;
		const result = await getFilm(keyword);
	}

	return (
		<div>
			<Headline
				title={'Поиск'}
			/>
			<Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
			<form className={styles.wrapperSearch} onSubmit={formSubmit}>
				<Input
					placeholder={'Введите название'}
					inputImage={'search.svg'}
					name='movie'
				/>
				<Button
					className={'button'}
					onClick={getFilm}
				>{'Искать'}</Button>
			</form>
			<div className={styles.filmList}>
				{movies.map(m => (
					<CardFilm
						key={m.id}
						name={m.titleText.text}
						rating={m.id}
						poster={m.primaryImage.url}
						id={m.id}
					/>
				))}
			</div>
			<Outlet />
		</div>
	);
}

export default Search;
