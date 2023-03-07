import { connect } from 'react-redux'
import React from 'react'
import { UsersPage } from './UsersPage'
import {
	getUsersThunkCreator,
	setPageNumber,
	followThunkCreator,
	unfollowThunkCreator
} from '../../redux/users-reducer.js'

class UsersPageClass extends React.Component {
	componentDidMount() {
		this.props.getUsersThunkCreator(this.props.pageNumber, this.props.pageSize)
	}
	onPageChanged = (pageNumber) => {
		this.props.setPageNumber(pageNumber)
		this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
	}
	render() {
		return (
			<UsersPage
				users={this.props.users}
				usersTotalCount={this.props.usersTotalCount}
				pageSize={this.props.pageSize}
				pageNumber={this.props.pageNumber}
				onPageChanged={this.onPageChanged}
				isFetching={this.props.isFetching}
				followThunkCreator={this.props.followThunkCreator}
				unfollowThunkCreator={this.props.unfollowThunkCreator}
				isFollowing={this.props.isFollowing} />
		)

	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		usersTotalCount: state.usersPage.usersTotalCount,
		pageSize: state.usersPage.pageSize,
		pageNumber: state.usersPage.pageNumber,
		isFetching: state.usersPage.isFetching,
		isFollowing: state.usersPage.isFollowing
	}
}
export const UsersPageContainer = connect(mapStateToProps, {
	getUsersThunkCreator,
	followThunkCreator,
	unfollowThunkCreator,
	setPageNumber
})(UsersPageClass)