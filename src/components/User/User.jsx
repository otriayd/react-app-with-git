import styles from './User.module.scss'
import Avatar from '../../assets/images/Avatarka.jpg'

export const User = () => {
	return (
		<div className={styles.user}>
			<div className={styles.userAvatar}>
				<img src={Avatar} alt="" />
			</div>
			<div className={styles.userName}>
				<span>Name</span>
			</div>
			<div className={styles.userAbout}>
				About Me
			</div>
			<div className={styles.userFollowing}>
				<button>Follow</button>
			</div>
		</div>
	)
}