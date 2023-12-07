import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import styles from './FilmInfo.module.css';
import cn from 'classnames';
import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { SearchResult } from '../../interfaces/searchResult.interface';

export function FilmInfo() {
	const { id } = useParams();
	const [movie, setMovie] = useState<SearchResult>();
	useEffect(() => {
		getInfoMovie(id);
	}, [])

	const getInfoMovie = async (id: string) => {
		const options = {
			method: 'GET',
			url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
			headers: {
				'X-RapidAPI-Key': '6d0dc55e0emsh08bd4ba4945fa55p1dd689jsn808754589baf',
				'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
			}
		};

		try {
			const response = await axios.request(options);
			const newData = response.data
			setMovie(newData.results);
			console.log(newData);
		} catch (error) {
			console.error(error);
		}
	}

	return <div className={styles.wrapper}>
		<Suspense fallback={'Загружаю...'}>
			<div className={styles.section}>
				<NavLink to='/' className={styles.item}>Поиск фильмов</NavLink>
				<div className={styles.filmName}>{movie?.titleText.text}</div>
			</div>
			<div className={styles.film}>
				<div className={styles.imageWrapper}>
					<img src={movie?.primaryImage.url} alt="Постер фильма" className={styles.image} />
				</div>
				<div className={styles.description}>
					<div className={styles.text}>After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos.</div>
					<div className={styles.buttons}>
						<div className={styles.rating}>
							<img src="/public/star.svg" alt="Рейтинг" className="cardFilm__rating-img" />
							<p className={styles.ratingNumber}>{movie?.releaseDate.year}</p>
						</div>
						<div className={styles.favorites}>
							<img src="/public/like.svg" alt="Избранное" />
							<button className={styles.favoritesButton}>В избранное</button>
						</div>
					</div>
					<div className={styles.filmInfo}>
						<span className={styles.item}>Тип</span>
						<span className={styles.info}>{movie?.titleType.text}</span>
					</div>
					<div className={styles.filmInfo}>
						<div className={styles.item}>Дата выхода</div>
						<div className={styles.info}>{movie?.releaseDate.day}-{movie?.releaseDate.month}-{movie?.releaseDate.year}</div>
					</div>
					<div className={styles.filmInfo}>
						<div className={styles.item}>Длительность</div>
						<div className={styles.info}>181 мин</div>
					</div>
					<div className={styles.filmInfo}>
						<div className={styles.item}>Жанр</div>
						<div className={styles.info}>Adventure,  Science Fiction, Action</div>
					</div>
				</div>
			</div>
			<div>
				<span className={cn(styles.item, styles.indent)}>Отзывы</span>
				<div className={styles.section}>
					<div className={styles.review}>
						<span className={styles.reviewTitle}>Not as good as infinity war..</span>
						<span className={styles.item}>2019-04-29</span>
					</div>
					<div className={styles.text}>But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless feel infinity war somehow managed to accomplish. Some silly plot holes and characters that could&apos;ve been cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to serve no purpose but deux ex machina a space ship...</div>
				</div>
			</div>
		</Suspense >
	</div>
}