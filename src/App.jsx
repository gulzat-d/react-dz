import { useState } from 'react';
import Authorization from './components/Authorization/Authorization';
import Films from './components/Films/Films';
import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';
import Paragraph from './components/Paragraph/Paragraph';
import Search from './components/Search/Search';
import { UserContext } from './context/user.context';

function App() {
	const dataOfLocalstorage = JSON.parse(localStorage.getItem('users'));
	const activeUser = dataOfLocalstorage.find(i => i.isLogined === true);
	const [userName, setUserName] = useState(activeUser.name);

	return (
		<UserContext.Provider value={{ userName, setUserName }}>
			<Header />
			<Headline
			// title = {'Поиск'} 
			/>
			<Paragraph
				text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
			/>
			<Search />
			<Films />
			<Authorization></Authorization>
		</UserContext.Provider>
	);
}

export default App;
