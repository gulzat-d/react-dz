import styles from './LoginButton.module.css';

function LoginButton() {

	return  (
		<a href="#" className={styles.header__navItem}>
			<span>Войти</span>
			<img src="/public/login.svg" alt="Войти" />
		</a>
	);
}

export default LoginButton;
