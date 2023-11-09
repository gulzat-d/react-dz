import CardFilm from '../CardFilm/CardFilm';
import styles from './Films.module.css';

function Films() {

	const data = [
		{
			name: 'Black Widow',
			rating: 324,
			poster: 'Black_Widow.svg'
		},
		{
			name: 'Shang Chi',
			rating: 124,
			poster: 'Shang_Chi.svg'
		},
		{
			name: 'Loki',
			rating: 235,
			poster: 'Loki.svg'
		},
		{
			name: 'How I Met Your Mother',
			rating: 123,
			poster: 'How_I_Met_Your_Mother.svg'
		},
		{
			name: 'Money Heist',
			rating: 8125,
			poster: 'Money_Heist.svg'
		},
		{
			name: 'Friends',
			rating: 123,
			poster: 'Friends.svg'
		},
		{
			name: 'The Big Bang Theory',
			rating: 12,
			poster: 'The_Big_Bang_Theory.svg'
		},
		{
			name: 'Two And a Half Men',
			rating: 456,
			poster: 'Two_And_a_Half_Men.svg'
		}
	];

	return <div className={styles['films']}>
	
		{data.map(el => (
			<CardFilm
				key={data.length + 1}
				name = {el.name}
				rating = {el.rating}
				poster = {el.poster}
			/>
		))}
	</div>;
}
export default Films;
