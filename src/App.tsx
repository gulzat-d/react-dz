import { useState } from 'react';
import Authorization from './components/Authorization/Authorization';
import Films from './components/Films/Films';
import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';
import Paragraph from './components/Paragraph/Paragraph';
import Search from './components/Search/Search';
import { UserContextProvider } from './context/user.context';

function App() {

	return (
		<UserContextProvider>
			<div>
				<Header />
				<Headline
					title={'Поиск'}
				/>
				<Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
				<Search />
				<Films />
				<Authorization></Authorization>
			</div>
		</UserContextProvider >
	);
}

export default App;
