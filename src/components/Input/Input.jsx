import styles from './Input.module.css';

function Input({ placeholder, inputImage }) {
	return  (
		<>
			{inputImage && <img src={'/public/'+ inputImage} alt="Поиск" className={styles['inputImage']}/>}
			<input type='text' className={styles['input']} placeholder={placeholder}/>
		</> 
	);
}
export default Input;
