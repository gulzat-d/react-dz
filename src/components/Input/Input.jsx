import styles from './Input.module.css';

function Input({ placeholder, inputImage }) {
	if (inputImage) {
		inputImage = '/public/'+ inputImage;
		return  (
			<>
				<img src={inputImage} alt="Поиск" className={styles['inputImage']}/>
				<input type='text' className={styles['input']} placeholder={placeholder}/>
			</>
		);
	} else {
		return  (
			<>
				<input type='text' className={styles['button']} placeholder={placeholder}/>
			</>
		);
	}
}

export default Input;
