import styles from './ProfilePage.module.scss'
import Avatar from '../../assets/images/Avatarka.jpg'
import React from 'react'

export const ProfilePage = (props) => {
	return (
		<div className={styles.profile}>
			<div className={styles.profileData}>
				<div className={styles.profileAvatar}>
					<img src={props.avatar ? props.avatar : Avatar} alt="" />
				</div>
				<div className={styles.profileName}>
					{props.name}
				</div>
				<ProfileStatus
					status={props.status}
					updateProfileStatusThunkCreator={props.updateProfileStatusThunkCreator} />
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

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps !== this.props) {
			this.setState({
				status: this.props.status
			})
		}
	}
	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	onStatusChanged = (event) => {
		this.setState({
			status: event.target.value
		})
	}

	deactivateEditMode = (event) => {
		this.setState({
			editMode: false
		})
		this.props.updateProfileStatusThunkCreator(event.target.value)
	}
	render() {

		return (
			<div onClick={this.activateEditMode} className={styles.profileStatus}>
				{this.state.editMode &&
					<input
						autoFocus={true}
						onBlur={this.deactivateEditMode}
						type="text"
						onChange={this.onStatusChanged}
						value={this.state.status} />
				}
				{!this.state.editMode &&
					<span>{this.state.status}</span>
				}
			</div>
		)
	}

}