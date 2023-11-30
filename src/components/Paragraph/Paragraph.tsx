import styles from './Paragraph.module.css';

type ParagraphProps = { children: string };

function Paragraph({ children }: ParagraphProps) {

	return (
		<>
			<p className={styles.paragraph}>{children}</p>
		</>
	);
}

export default Paragraph;
