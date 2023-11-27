import styles from './LoginButton.module.css';

function LoginButton() {

	return (
		<button className={styles.header__navItem}>Войти
			<img src="/public/login.svg" alt="Войти" />
		</button>
	);
}

export default LoginButton;
