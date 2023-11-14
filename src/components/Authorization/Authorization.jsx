import Button from '../Button/Button';
import Headline from '../Headline/Headline';
import Input from '../Input/Input';
import styles from './Authorization.module.css';

function Authorization() {

	return  (
		<>
			<Headline
				title={'Вход'}
			/>
			<div className={styles.authorization}>
				<Input
					placeholder={'Ваше имя'}
				/>
				<Button
					text={'Войти в профиль'}
				/>
			</div>
		</>
	);
}

export default Authorization;
