import styles from './Search.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Paragraph from '../Paragraph/Paragraph';
import Headline from '../Headline/Headline';
import { Outlet } from 'react-router-dom';

function Search() {

	return (
		<div>
			<Headline
				title={'Поиск'}
			/>
			<Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
			<div className={styles.wrapperSearch}>
				<Input
					placeholder={'Введите название'}
					inputImage={'search.svg'}
				/>
				<Button
					className={'button'}
					onClick={() => { console.log('Нажали'); }}
				>{'Искать'}</Button>
			</div>
			<Outlet />
		</div>
	);
}

export default Search;
