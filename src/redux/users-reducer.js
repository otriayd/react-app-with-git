import { usersApi } from '../api/api.js'

const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'

const initialState = {
	users: [],
	usersTotalCount: 0,
	pageSize: 5,
	pageNumber: 1,
	isFetching: false,
	isFollowing: []
}

export const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: action.users
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				usersTotalCount: action.usersTotalCount
			}
		case SET_PAGE_NUMBER:
			return {
				...state,
				pageNumber: action.pageNumber
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}

		case FOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						user.followed = true
					}
					return user
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						user.followed = false
					}
					return user
				})
			}
		case TOGGLE_FOLLOWING:
			return {
				...state,
				isFollowing: action.isFetching
					? [...state.isFollowing, action.userId]
					: state.isFollowing.filter(user => user !== action.userId)
			}
		default: return state
	}
}

export const followActionCreator = (userId) => {
	return {
		type: FOLLOW,
		userId
	}
}
export const unfollowActionCreator = (userId) => {
	return {
		type: UNFOLLOW,
		userId
	}
}

export const setPageNumber = (pageNumber) => {
	return {
		type: SET_PAGE_NUMBER,
		pageNumber
	}
}

export const setUsers = (users) => {
	return {
		type: SET_USERS,
		users
	}
}

export const setUsersTotalCountActionCreator = (usersTotalCount) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		usersTotalCount
	}
}

export const setIsFetching = (isFetching) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	}
}

export const toggleFollowing = (isFetching, userId) => {
	return {
		type: TOGGLE_FOLLOWING,
		userId,
		isFetching
	}
}

export const getUsersThunkCreator = (page, count) => {
	return (dispatch) => {
		dispatch(setIsFetching(true))
		usersApi.getUsers(page, count)
			.then(response => {
				dispatch(setUsersTotalCountActionCreator(response.data.totalCount))
				return response.data.items
			})
			.then(users => {
				dispatch(setIsFetching(false))
				dispatch(setUsers(users))
			})
	}
}
export const followThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowing(true, userId))
		usersApi.follow(userId)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(toggleFollowing(false, userId))
					dispatch(followActionCreator(userId))
				}
			})
	}
}

export const unfollowThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowing(true, userId))
		usersApi.unfollow(userId)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(toggleFollowing(false, userId))
					dispatch(unfollowActionCreator(userId))
				}
			})
	}
}



