import './App.css';
import Button from './components/Button/Button';
import Headline from './components/Headline/Headline';
import Paragraph from './components/Paragraph/Paragraph';

function App() {
	const data = {
		headline: {
			title: 'Поиск'
		},
		paragraph: {
			text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.',
			fontsize: 'font-size: 16px'
		},
		button: {
			text: 'Искать'
		}
	};

	return  (
		<>
			<Headline
				title = {data.headline['title']}
			/>
			<Paragraph
				text = {data.paragraph['text']}
				fontsize = {data.paragraph['fontsize']}
			/>
			<Button
				text = {data.button['text']}
			/>
		</>
	);
}

export default App;
