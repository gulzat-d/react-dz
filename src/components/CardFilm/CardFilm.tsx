import { Link } from 'react-router-dom';
import styles from './CardFilm.module.css';
import { CardFilmProps } from './CardFilm.props';
import { useDispatch, useSelector } from 'react-redux';
import { MouseEvent } from 'react';
import { AppDispatch, RootState } from '../../store/store';
import { favoritesActions } from '../../store/favorites.slice';

function CardFilm({ name, rating, poster, id }: CardFilmProps) {
	const dispatch = useDispatch<AppDispatch>();
	const userName = useSelector((s: RootState) => s.user.find(i => i.isLogined === true));

	const toggle = (e: MouseEvent) => {
		e.preventDefault();
		const username = userName.name as string;
		dispatch(favoritesActions.add({ username, id }));
		dispatch(favoritesActions.changeUser(userName.name));
	};

	return (
		<Link to={`/movie/${id}`} className={styles.cardFilm}>
			<div className={styles.rating}>
				<img
					src="/public/star.svg"
					alt="Рейтинг"
					className="rating-img"
				/>
				<p className={styles.ratingNumber}>{rating}</p>
			</div>
			<img src={poster} alt={name} className={styles.poster} />
			<h3 className={styles.name}>{name}</h3>
			<div className={styles.favorites}>
				<img src="/public/like.svg" alt="Избранное" />
				<button
					onClick={toggle}
					className={styles.favoritesButton}
				>
					В избранное
				</button>
			</div>
		</Link>
	);
}

export default CardFilm;
