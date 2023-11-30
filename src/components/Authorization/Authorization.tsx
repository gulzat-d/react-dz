// import { FormEvent, useRef } from 'react';
// import Button from '../Button/Button';
// import Headline from '../Headline/Headline';
// import Input from '../Input/Input';
// import styles from './Authorization.module.css';
// import { useLocalStorage } from '../../hooks/use-localStorage.hook';
// import { useContext } from 'react';
// import { UserContextProvider } from '../../context/user.context';

// function Authorization() {
// 	const inputRef = useRef<HTMLElement>();
// 	const [user, saveUser] = useLocalStorage('users');
// 	const { userName, setUserName } = useContext(UserContextProvider);
// 	type typeRef = typeof inputRef;

// 	const focusError = (ref: typeRef) => {
// 		ref.current.focus();
// 	};

// 	const handleSubmit = (e: FormEvent) => {
// 		e.preventDefault();
// 		const form = e.target;
// 		const formData = new FormData(form);
// 		const newUser = Object.fromEntries(formData).user;
// 		setUserName(newUser);

// 		if (!newUser) {
// 			focusError(inputRef);
// 		} else {
// 			const oldUser = user.find(u => u.name === newUser);
// 			if (oldUser) {
// 				setUserName(oldUser.name);
// 				const newData = user.map(i => {
// 					if (i.name === newUser) {
// 						i.isLogined = true;
// 						return i;
// 					} else {
// 						i.isLogined = false;
// 						return i;
// 					}
// 				});
// 				saveUser(newData);
// 			} else {
// 				let newArray = user.map(i => {
// 					i.isLogined = false;
// 					return i;
// 				});
// 				newArray.push({ 'name': newUser, 'isLogined': true });
// 				saveUser(newArray);
// 			}
// 		}
// 	};

// 	return (
// 		<>
// 			<Headline
// 				title={'Вход'}
// 			/>
// 			<form className={styles.authorization} onSubmit={handleSubmit}>
// 				<Input
// 					placeholder={'Ваше имя'}
// 					ref={inputRef}
// 					name='user'
// 				/>
// 				<Button
// 					className={'button'}>
// 					Войти в профиль
// 				</Button>
// 			</form>
// 		</>
// 	);
// }

// export default Authorization;
