import { HeadlineProps } from './Headline.props';
import styles from './Headline.module.css';

function Headline({ title }: HeadlineProps) {

	return (
		<>
			<h1 className={styles.headline}>{title}</h1>
		</>
	);
}

export default Headline;
