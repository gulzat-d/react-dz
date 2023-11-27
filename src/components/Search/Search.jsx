import styles from './Search.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

function Search() {

	return (
		<div className={styles.wrapperSearch}>
			<Input
				placeholder={'Введите название'}
				inputImage={'search.svg'}
			/>
			<Button
				text={'Искать'}
				className={'button'}
				onClick={() => { console.log('Нажали'); }}
			/>
		</div>
	);
}

export default Search;
