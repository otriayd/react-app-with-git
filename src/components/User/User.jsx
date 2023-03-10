import styles from './User.module.scss'
import Avatar from '../../assets/images/Avatarka.jpg'
import { Link } from 'react-router-dom'

export const User = (props) => {
	return (
		<div className={styles.user}>
			<div className={styles.userAvatar}>
				<Link to={`/profile/${props.userData.id}`}>
					<img src={props.userData.photos.small ? props.userData.photos.small : Avatar} alt="" />
				</Link>
			</div>
			<div className={styles.userName}>
				<span>{props.userData.name}</span>
			</div>
			<div className={styles.userAbout}>
				{props.userData.status ? props.userData.status : 'Status false'}
			</div>
			<div className={styles.userFollowing}>
				{!props.userData.followed
					? <button
						disabled={props.isFollowing.some(user => user === props.userData.id)}
						onClick={() => { props.followThunkCreator(props.userData.id) }} >Follow</button>
					: <button
						disabled={props.isFollowing.some(user => user === props.userData.id)}
						onClick={() => { props.unfollowThunkCreator(props.userData.id) }}>Unfollow</button>}
			</div>
		</div>
	)
}