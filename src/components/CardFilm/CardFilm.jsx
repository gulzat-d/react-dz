import './CardFilm.css';

function CardFilm({ name, rating, poster }) {

	return  (
		<div className='cardFilm'>
			<div className='cardFilm__rating'>
				<img src="/public/star.svg" alt="Рейтинг" className="cardFilm__rating-img"/>
				<p className='cardFilm__rating-number'>{rating}</p>
			</div>
			<img src={'/public/films/'+poster} alt="Постер" className='cardFilm__poster'/>
			<h3 className='cardFilm__name'>{name}</h3>
			<div className="cardFilm__favorites">
				<img src="/public/like.svg" alt="Избранное" />
				<button className='cardFilm__favorites-button'>В избранное</button>
			</div>
		</div>
	);
}

export default CardFilm;
