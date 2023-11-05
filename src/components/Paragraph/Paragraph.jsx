import './Paragraph.css';

function Paragraph({ text, fontsize }) {

	return  (
		<>
			<p className='paragraph' style={{fontsize}}>{text}</p>
		</>
	);
}

export default Paragraph;
