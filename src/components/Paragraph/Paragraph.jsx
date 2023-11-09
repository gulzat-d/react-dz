import styles from'./Paragraph.module.css';

function Paragraph({ text, fontsize }) {

	return  (
		<>
			<p className={styles['paragraph']} style={{fontsize}}>{text}</p>
		</>
	);
}

export default Paragraph;
