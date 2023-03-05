import { NavLink } from 'react-router-dom'
import styles from './Aside.module.scss'

export const Aside = (props) => {

	const setActive = ({ isActive }) => isActive ? 'Aside_active__hwF91' : ''

	return (
		<aside className={styles.appAside}>
			<nav>
				<ul className={styles.navList}>
					<li>
						<NavLink className={setActive} to={'/'}>Front Page</NavLink>
					</li>
					<li>
						<NavLink className={setActive} to={'/profile'}>Profile</NavLink>
					</li>
					<li>
						<NavLink className={setActive} to={'/users'}>Users</NavLink>
					</li>
					<li>
						<NavLink className={setActive} to={'/login'}>Login</NavLink>
					</li>
					<li>
						<NavLink className={setActive} to={'/dialogs'}>Dialogs</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	)
}