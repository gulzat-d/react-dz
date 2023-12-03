import { FormEvent, MutableRefObject, useRef, useState } from 'react';
import Button from '../Button/Button';
import Headline from '../Headline/Headline';
import Input from '../Input/Input';
import styles from './Authorization.module.css';
import { useLocalStorage } from '../../hooks/use-localStorage.hook';
import { useContext } from 'react';
import { IAuthUser } from '../../interfaces/user.interface';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { userActions } from '../../store/user.slice';

function Authorization() {
	// const [users, saveUsers] = useLocalStorage('users');
	// const dispatch = useDispatch<AppDispatch>();



	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const form = e.target as typeof e.target & HTMLFormElement;
		const formData = new FormData(form);
		const newUser = Object.fromEntries(formData).user as string;
		// dispatch(userActions.addName(newUser));
		console.log(newUser);

		// if (users !== undefined && Array.isArray(users)) {
		// 	const oldUser = users.find(u => u.name === newUser);
		// 	if (oldUser) {
		// 		// console.log(1);
		// 		const newData: IAuthUser[] = users.map(i => {
		// 			// console.log(2);
		// 			if (i.name === newUser) {
		// 				i.isLogined = true;
		// 				return i;
		// 			} else {
		// 				i.isLogined = false;
		// 				return i;
		// 			}
		// 		});
		// 		saveUsers(newData);
		// 	} else {
		// 		const newArray: IAuthUser[] = users.map(i => {
		// 			i.isLogined = false;
		// 			return i;
		// 		});
		// 		newArray.push({ 'name': newUser, 'isLogined': true });
		// 		saveUsers(newArray);
		// 	}
		// }
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
