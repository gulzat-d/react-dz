import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';
import Input from './components/Input/Input';
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
		input: {
			placeholder: 'Введите название',
			inputImage: 'search.svg'
		},
		button: {
			text: 'Искать'
		}
	};

	return  (
		<>
			<Header/>
			<Headline
				title = {data.headline['title']}
			/>
			<Paragraph
				text = {data.paragraph['text']}
				fontsize = {data.paragraph['fontsize']}
			/>
			<Input
				placeholder = {data.input.placeholder}
				inputImage = {data.input.inputImage}
			/>
			<Button
				text = {data.button['text']}
				onClick = {() => { console.log('Нажали');}}
			/>
		</>
	);
}

export default App;
