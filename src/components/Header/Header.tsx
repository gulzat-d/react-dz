import styles from './Header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { userActions } from '../../store/user.slice';
import { MouseEvent, useEffect } from 'react';

function Header() {
	const user = useSelector((s: RootState) => s.user.find(i => i.isLogined === true)).name;
	const movies = useSelector((s: RootState) => s.favorites.find(u => u.nameUser == user));
	const dispatch = useDispatch<AppDispatch>()
	const buttonText = user ? 'Выйти' : 'Войти';
	const navigate = useNavigate();

	function auth(e: MouseEvent) {
		e.preventDefault();
		navigate('/');
		dispatch(userActions.logout());
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<a href="#" className={styles.header__favorites}>
					<img src="/public/favorites.svg" alt="Избранное" />
				</a>
				<div className={styles.header__nav}>
					<NavLink to='/main' className={({ isActive }) => cn(styles.header__navItem, {
						[styles.active]: isActive
					})}>
						Поиск фильмов
					</NavLink>
					<NavLink to='/main' className={cn(styles.header__navItem, { [styles.hidden]: !user })}>
						<span>{user}</span>
						<img src="/user.svg" alt="Пользователь" />
					</NavLink>
					<NavLink to='/main/favorites' className={({ isActive }) => cn(styles.header__navItem, {
						[styles.active]: isActive
					})}>
						<span>Мои фильмы</span>
						<span
							className={cn(styles.ellipse, { [styles.hidden]: !movies })}
						>
							{movies && movies?.movies.length}
						</span>
					</NavLink>
					<LoginButton onClick={auth}>{buttonText}</LoginButton>
				</div>
			</div>
		</div>
	);
}

export default Header;
