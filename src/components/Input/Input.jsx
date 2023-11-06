import './Input.css';

function Input({ placeholder, inputImage }) {
	if (inputImage) {
		inputImage = '/public/'+ inputImage;
		return  (
			<>
				<img src={inputImage} alt="Поиск" className='inputImage'/>
				<input type='text' className='input' placeholder={placeholder}/>
			</>
		);
	} else {
		return  (
			<>
				<input type='text' className='button' placeholder={placeholder}/>
			</>
		);
	}
}

export default Input;
