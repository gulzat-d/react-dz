import styles from './CardFilm.module.css';
import { CardFilmProps } from './CardFilm.props';

function CardFilm({ name, rating, poster }: CardFilmProps) {

	return (
		<div className={styles.cardFilm}>
			<div className={styles.cardFilm__rating}>
				<img src="/public/star.svg" alt="Рейтинг" className="cardFilm__rating-img" />
				<p className={styles.cardFilm__ratingNumber}>{rating}</p>
			</div>
			<img src={'/public/films/' + poster} alt={name} className={styles.cardFilm__poster} />
			<h3 className={styles.cardFilm__name}>{name}</h3>
			<div className={styles.cardFilm__favorites}>
				<img src="/public/like.svg" alt="Избранное" />
				<button className={styles.cardFilm__favoritesButton}>В избранное</button>
			</div>
		</div>
	);
}

export default CardFilm;
