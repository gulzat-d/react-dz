import styles from'./Header.module.css';
import LoginButton from '../LoginButton/LoginButton';

function Header() {

	return  (
		<div className={styles.header}>
			<a href="#" className={styles.header__favorites}>
				<img src="/public/favorites.svg" alt="Избранное"/>
			</a>
			<div className={styles.header__nav}>
				<a href="#" className={styles.header__navItem}>Поиск фильмов</a>
				<a href="#" className={styles.header__navItem}>
					<span>Мои фильмы</span>
					<span className={styles['ellipse']}>2</span>
				</a>
				<LoginButton/>
			</div>
		</div>
	);
}

export default Header;
