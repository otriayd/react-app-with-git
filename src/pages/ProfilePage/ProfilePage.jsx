import styles from './ProfilePage.module.scss'
import Avatar from '../../assets/images/Avatarka.jpg'

export const ProfilePage = () => {
	return (
		<div className={styles.profile}>
			<div className={styles.profileData}>
				<div className={styles.profileAvatar}>
					<img src={Avatar} alt="" />
				</div>
				<div className={styles.profileName}>
					name
				</div>
				<div className={styles.profileStatus}>
					Im React Developer
				</div>
			</div>
			<div className={styles.profilePosts}>
				<div className={styles.postItems}>
					<div className={styles.post}>
						Im the best
					</div>
				</div>
				<div className={styles.profileNewPost}>
					<textarea name="" id="" cols="20" rows="5" />
					<button>Add Post</button>
				</div>
			</div>
		</div>
	)
}