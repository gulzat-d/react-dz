import { useParams } from 'react-router-dom';
import Headline from '../Headline/Headline';

export function FilmInfo() {
	const { id } = useParams();

	return <>
		<Headline title={`Здесь будет инфо о фильме ${id}`} />

	</>
}