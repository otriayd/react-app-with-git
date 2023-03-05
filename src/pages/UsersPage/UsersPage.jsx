import styles from './UsersPage.module.scss'
import { User } from '../../components/User'

export const UsersPage = () => {
	return (
		<div className={styles.users}>
			<div className={styles.paginationWrapper}>
				<div className={styles.pagination}>
					<span>1</span>
					<span>2</span>
					<span>3</span>
					<span>4</span>
					<span>5</span>
				</div>
			</div>
			<div className={styles.usersItems}>
				<User />
				<User />
				<User />
				<User />
				<User />
			</div>
		</div>
	)
}