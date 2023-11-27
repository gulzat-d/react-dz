import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef(function Button({ text, onClick, className }, ref) {

	return (
		<>
			<button ref={ref} className={styles[className]} onClick={onClick}>{text}</button>
		</>
	);
});


export default Button;
