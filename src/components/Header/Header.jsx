import styles from'./Header.module.css';

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
				<a href="#" className={styles.header__navItem}>
					<span>Войти</span>
					<img src="/public/login.svg" alt="Войти" />
				</a>
			</div>
		</div>
	);
}

export default Header;
