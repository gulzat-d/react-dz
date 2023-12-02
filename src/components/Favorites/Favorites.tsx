import CardFilm from '../CardFilm/CardFilm';
import Films from '../Films/Films';
import Headline from '../Headline/Headline';

export function Favorites() {

	return <div>
		<Headline title='Избранное' />
		<Films />
	</div>
}