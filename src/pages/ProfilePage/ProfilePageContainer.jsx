import { connect } from 'react-redux'
import { ProfilePage } from './ProfilePage'
import React from 'react'
import {
	updateProfileStatusThunkCreator,
	addPostThunkCreator,
	getProfileData
} from '../../redux/profile-reducer'
import { WithAuthRedirect } from '../../hocs/withAuthRedirect'
import { WithRouterParams } from '../../hocs/withRouterParams'
import { compose } from 'redux'


class ProfilePageClass extends React.Component {

	componentDidMount() {
		const id = this.props.id ? this.props.id : this.props.authId
		this.props.getProfileData(id)
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props !== prevProps) {
			const id = this.props.id ? this.props.id : this.props.authId
			this.props.getProfileData(id)
		}
	}

	render() {
		return <ProfilePage {...this.props} />
	}
}


const RouterParam = WithRouterParams(ProfilePageClass)


const mapStateToPropsForRedirect = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

const mapStateToProps = (state) => {
	return {
		name: state.profilePage.name,
		id: state.profilePage.id,
		avatar: state.profilePage.avatar,
		authId: state.auth.id,
		status: state.profilePage.status,
		posts: state.profilePage.posts
	}
}

export const ProfilePageContainer = compose(
	WithRouterParams,
	connect(mapStateToPropsForRedirect, {}),
	WithAuthRedirect,
	connect(mapStateToProps, {
		updateProfileStatusThunkCreator,
		addPostThunkCreator,
		getProfileData
	})
)(RouterParam)

