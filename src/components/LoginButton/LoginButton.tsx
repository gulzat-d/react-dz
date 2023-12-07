import { Link } from 'react-router-dom';
import styles from './LoginButton.module.css';

function LoginButton() {

	return (
		<Link to='/login' className={styles.link}>
			<button className={styles.header__navItem}>Войти
				<img src="/public/login.svg" alt="Войти" />
			</button>
		</Link>
	);
}

export default LoginButton;
