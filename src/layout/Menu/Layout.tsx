import {  Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Header from '../../components/Header/Header';

export function Layout() {

	return <div className={styles.container}>
		<Header />
		<Outlet />
	</div>
}