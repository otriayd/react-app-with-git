import { profileApi } from '../api/api.js'

const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const ADD_POST = 'ADD_POST'

const initialState = {
	posts: [
		{ id: 1, postText: 'Never give up!' },
		{ id: 2, postText: 'Never give up!' },
		{ id: 3, postText: 'Never give up!' },
		{ id: 4, postText: 'Never give up!' }
	],
	id: null,
	avatar: null,
	name: null,
	status: null
}

export const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_PROFILE:
			return {
				...state,
				id: action.id,
				name: action.name,
				avatar: action.avatar,
				status: action.status
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status
			}
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, { ...action.postText, id: 5 }]
			}
		default: return state
	}
}

export const setProfileActionCreator = (status, data) => {
	return {
		type: SET_PROFILE,
		id: data.userId,
		name: data.fullName,
		avatar: data.photos.large,
		status: status
	}
}

export const addPostActionCreator = (postText) => {
	return {
		type: ADD_POST,
		postText
	}
}

export const setProfileStatusActionCreator = (status) => {
	return {
		type: SET_STATUS,
		status
	}
}

export const addPostThunkCreator = (postText) => {
	return (dispatch) => {
		dispatch(addPostActionCreator(postText))
	}
}

export const updateProfileStatusThunkCreator = (newStatus) => {
	return (dispatch) => {
		profileApi.setStatus(newStatus)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setProfileStatusActionCreator(newStatus))
				}
			})
	}
}

export const getProfileData = (userId) => {
	return (dispatch) => {
		const status = profileApi.getStatus(userId)
		const profileData = profileApi.getProfile(userId)
		Promise.all([status, profileData])
			.then(data => {
				const [status, profileData] = data
				dispatch(setProfileActionCreator(status.data, profileData.data))
			})
	}
}





