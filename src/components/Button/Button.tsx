import { forwardRef } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

function Button({ children, className, ...props }: ButtonProps) {

	return (
		<>
			<button className={styles[className]} {...props}>{children}</button>
		</>
	);
};


export default Button;
