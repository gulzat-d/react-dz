import { FormEvent, MutableRefObject, useRef, useState } from 'react';
import Button from '../Button/Button';
import Headline from '../Headline/Headline';
import Input from '../Input/Input';
import styles from './Authorization.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { userActions } from '../../store/user.slice';
import { useNavigate } from 'react-router-dom';

function Authorization() {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const form = e.target as typeof e.currentTarget & HTMLFormElement;
		const formData = new FormData(form);
		const newUser = Object.fromEntries(formData).user as string;
		if (newUser) {
			dispatch(userActions.addName(newUser));
			navigate('/main');
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
