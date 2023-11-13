import CardFilm from '../CardFilm/CardFilm';
import styles from './Films.module.css';

function Films() {

	const data = [
		{
			name: 'Black Widow',
			rating: 324,
			poster: 'Black_Widow.svg',
			id: 1
		},
		{
			name: 'Shang Chi',
			rating: 124,
			poster: 'Shang_Chi.svg',
			id: 2
		},
		{
			name: 'Loki',
			rating: 235,
			poster: 'Loki.svg',
			id: 3
		},
		{
			name: 'How I Met Your Mother',
			rating: 123,
			poster: 'How_I_Met_Your_Mother.svg',
			id: 4
		},
		{
			name: 'Money Heist',
			rating: 8125,
			poster: 'Money_Heist.svg',
			id: 5
		},
		{
			name: 'Friends',
			rating: 123,
			poster: 'Friends.svg',
			id: 6
		},
		{
			name: 'The Big Bang Theory',
			rating: 12,
			poster: 'The_Big_Bang_Theory.svg',
			id: 7
		},
		{
			name: 'Two And a Half Men',
			rating: 456,
			poster: 'Two_And_a_Half_Men.svg',
			id: 8
		}
	];

	return <div className={styles.films}>
	
		{data.map(el => (
			<CardFilm
				key={el.id}
				name = {el.name}
				rating = {el.rating}
				poster = {el.poster}
			/>
		))}
	</div>;
}
export default Films;
