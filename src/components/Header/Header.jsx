import Logo from '../../assets/images/Logo.png'
import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header>
			<div className={styles.headerLogo}>
				<img src={Logo} alt="" />
			</div>
			<div className={styles.headerLogin}>
				<p>Login</p>
			</div>
		</header>
	)
}