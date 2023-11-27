import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(function Input({ placeholder, inputImage, name }, ref) {
	return (
		<>
			{inputImage && <img src={'/public/' + inputImage} alt="Поиск" className={styles.inputImage} />}
			<input name={name} ref={ref} type='text' className={styles.input} placeholder={placeholder} />
		</>
	);
});
export default Input;
