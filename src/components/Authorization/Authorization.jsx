import styles from'./Authorization.module.css';

function Authorization() {

	return  (
		<a href="#" className={styles.header__navItem}>
			<span>Войти</span>
			<img src="/public/login.svg" alt="Войти" />
		</a>
	);
}

export default Authorization;
