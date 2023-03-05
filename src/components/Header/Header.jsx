import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.appHeader}>
			<div className={styles.headerLogo}>
				<Link to={'/'}>
					<img src={Logo} alt="" />
				</Link>
			</div>
			<div className={styles.headerLogin}>
				<Link to={'/login'}>Login</Link>
			</div>
		</header>
	)
}