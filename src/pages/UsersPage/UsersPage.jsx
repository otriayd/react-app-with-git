import styles from './UsersPage.module.scss'
import { User } from '../../components/User'
import Loading from '../../assets/images/Loading.gif'

export const UsersPage = (props) => {

	const pages = Math.ceil(props.usersTotalCount / props.pageSize)
	const pagesElements = []

	for (let i = 1; i <= pages; i++) {
		pagesElements.push(<span
			onClick={() => { props.onPageChanged(i) }}
			className={i === props.pageNumber ? styles.activePage : null}
			key={i}>{i}</span>)
	}
	const usersElements = props.users.map((user) => {
		return <User
			key={user.id}
			userData={user}
			followThunkCreator={props.followThunkCreator}
			unfollowThunkCreator={props.unfollowThunkCreator}
			isFollowing={props.isFollowing} />
	})

	return (
		<div className={styles.users}>
			<div className={styles.paginationWrapper}>
				<div className={styles.pagination}>
					{pagesElements}
				</div>
			</div>
			<div className={styles.usersItems}>
				{props.isFetching ? <img src={Loading} alt="" /> : usersElements}
			</div>
		</div>
	)
}