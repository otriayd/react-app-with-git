import styles from './Aside.module.scss'

export const Aside = () => {
	return (
		<aside className={styles.appAside}>
			<nav>
				<ul className={styles.navList}>
					<li>
						<a href="/">Front Page</a>
					</li>
					<li>
						<a href="/profile">Profile</a>
					</li>
					<li>
						<a href="/users">Users</a>
					</li>
					<li>
						<a href="/login">Login</a>
					</li>
					<li>
						<a href="/dialogs">Dialogs</a>
					</li>
				</ul>
			</nav>
		</aside>
	)
}