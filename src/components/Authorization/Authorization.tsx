import { FormEvent, MutableRefObject, useRef, useState } from 'react';
import Button from '../Button/Button';
import Headline from '../Headline/Headline';
import Input from '../Input/Input';
import styles from './Authorization.module.css';
import { useLocalStorage } from '../../hooks/use-localStorage.hook';
import { useContext } from 'react';
import { UserContext, UserContextProvider } from '../../context/user.context';
import { IAuthUser } from '../../interfaces/user.interface';

function Authorization() {
	const [users, saveUsers] = useLocalStorage('users');
	const { userName } = useContext(UserContext);
	const [activeUserName, setActiveUserName] = useState(userName);



	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const form = e.target as typeof e.target & HTMLFormElement;
		const formData = new FormData(form);
		const newUser = Object.fromEntries(formData).user as string;
		console.log(newUser);

		setActiveUserName(newUser);

		if (users !== undefined && Array.isArray(users)) {
			const oldUser = users.find(u => u.name === newUser);
			if (oldUser) {
				setActiveUserName(oldUser.name);
				const newData: IAuthUser[] = users.map(i => {
					if (i.name === newUser) {
						i.isLogined = true;
						return i;
					} else {
						i.isLogined = false;
						return i;
					}
				});
				saveUsers(newData);
			} else {
				const newArray: IAuthUser[] = users.map(i => {
					i.isLogined = false;
					return i;
				});
				newArray.push({ 'name': newUser, 'isLogined': true });
				saveUsers(newArray);
			}
		}
	};

	return (
		<>
			<Headline
				title={'Вход'}
			/>
			<form className={styles.authorization} onSubmit={handleSubmit}>
				<Input
					placeholder={'Ваше имя'}
					name='user'
				/>
				<Button
					className={'button'}>
					Войти в профиль
				</Button>
			</form>
		</>
	);
}

export default Authorization;
