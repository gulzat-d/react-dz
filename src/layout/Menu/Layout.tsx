import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import LoginButton from '../../components/LoginButton/LoginButton';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function Layout() {
	const userName = useSelector((s: RootState) => s.user.find(i => i.isLogined === true));
	const movies = useSelector((s: RootState) => s.favorites.find(i => i.nameUser == userName.name)).movies;


	return <div className={styles.container}>
		<div className={styles.header}>
			<a href="#" className={styles.header__favorites}>
				<img src="/public/favorites.svg" alt="Избранное" />
			</a>
			<div className={styles.header__nav}>
				<NavLink to='/' className={({ isActive }) => cn(styles.header__navItem, {
					[styles.active]: isActive
				})}>
					Поиск фильмов
				</NavLink>
				<NavLink to='/' className={styles.header__navItem}>
					<span>{userName.name}</span>
					<img src="/user.svg" alt="Пользователь" />
				</NavLink>
				<NavLink to='/favorites' className={({ isActive }) => cn(styles.header__navItem, {
					[styles.active]: isActive
				})}>
					<span>Мои фильмы</span>
					<span className={styles.ellipse}>{movies.length}</span>
				</NavLink>
				<LoginButton />
			</div>
		</div>
		<Outlet />
	</div>
}