import { useRef, useState } from 'react';
import Button from '../Button/Button';
import Headline from '../Headline/Headline';
import Input from '../Input/Input';
import styles from './Authorization.module.css';
import { useLocalStorage } from '../../hooks/use-localStorage.hook';

function Authorization() {
	const inputRef = useRef();
	const [user, saveUser] = useLocalStorage('users');

	const focusError = (ref) => {
		ref.current.focus();
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const newUser = Object.fromEntries(formData).user;
		if (!newUser) {
			focusError(inputRef);
		} else {
			saveUser(user.map(i => {
				if (i.name === newUser) {
					// console.log('Нашел');
					i.isLogined = true;
					return i;
				} else {
					i.isLogined = false;
					return i;
				}
			}));
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
					ref={inputRef}
					name='user'
				/>
				<Button
					text={'Войти в профиль'}
					className={'button'}

				/>
			</form>
		</>
	);
}

export default Authorization;


// форвард реф на инпут
// добавить форму входа, сохраняя данные в локалсторэдж
// [{name: 'Вася', isLogined: true}]
// isLogined меняется на false при выходе
// показываем данное имя в Header