import styles from './LoginPage.module.scss'

export const LoginPage = () => {
	return (
		<div className={styles.login}>
			<form>
				<input className={styles.text} type="text" placeholder="login" />
				<input className={styles.text} type="text" placeholder="password" />
				<input type="checkbox" />
				<button>log in</button>
			</form>
		</div>
	)
}