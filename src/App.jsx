import styles from'./App.module.css';
import Authorization from './components/Authorization/Authorization';
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
			<Paragraph
				text = {'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
			/>
			<Search/>
			<Films/>
			<Authorization></Authorization>
		</>
	);
}

export default App;
