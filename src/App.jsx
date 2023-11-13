import styles from'./App.module.css';
import Films from './components/Films/Films';
import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';
import Paragraph from './components/Paragraph/Paragraph';
import Search from './components/Search/Search';

function App() {

	return  (
		<>
			<Header/>
			<Headline
				title = {'Поиск'} 
			/>
			<Paragraph className={styles.paragraph}
				text = {'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
			/>
			<Search/>
			<Films/>
		</>
	);
}

export default App;
