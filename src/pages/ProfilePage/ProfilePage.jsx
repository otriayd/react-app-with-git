import styles from './ProfilePage.module.scss'
import Avatar from '../../assets/images/Avatarka.jpg'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

export const ProfilePage = (props) => {

	const addNewPost = (value) => {
		props.addPostThunkCreator(value)
	}

	const postsElements = props.posts.map((post) => {
		return <div key={post.id} className={styles.post}>
			{post.postText}
		</div>
	})

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
					{postsElements}
				</div>
				<div className={styles.profileNewPost}>
					<ReduxAddNewPostForm onSubmit={addNewPost} />
				</div>
			</div>
		</div>
	)
}

const AdNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field name="postText" rows="5" component={'textarea'} />
			<button>Add Post</button>
		</form>
	)
}

const ReduxAddNewPostForm = reduxForm({
	form: 'addNewPostForm'
})(AdNewPostForm)

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