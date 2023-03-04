import { Outlet } from 'react-router-dom'
import styles from './Main.module.scss'

export const Main = () => {
	return (
		<main className={styles.appMain}>
			<Outlet />
		</main>
	)
}