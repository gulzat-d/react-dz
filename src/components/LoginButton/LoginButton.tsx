import styles from './LoginButton.module.css';
import { LoginButtonProps } from './LoginButton.props';

function LoginButton({ children, ...props }: LoginButtonProps) {

	return (
		<button className={styles.header__navItem} {...props}>{children}
			<img src="/public/login.svg" alt="Авторизация" />
		</button>
	);
}

export default LoginButton;
