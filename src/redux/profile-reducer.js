import { profileApi } from '../api/api.js'

const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
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
				avatar: action.avatar
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status
			}
		default: return state
	}
}

export const setProfileActionCreator = (data) => {
	return {
		type: SET_PROFILE,
		id: data.id,
		name: data.name,
		avatar: data.avatar
	}
}

export const setProfileStatusActionCreator = (status) => {
	return {
		type: SET_STATUS,
		status
	}
}

export const setProfileThunkCreator = (profileId) => {
	return (dispatch) => {
		profileApi.getProfile(profileId)
			.then(response => {
				return { id: response.data.userId, name: response.data.fullName, avatar: response.data.photos.small }
			})
			.then(data => {
				dispatch(setProfileActionCreator({ ...data }))
			})
	}
}

export const setProfileStatusThunkCreator = (userId) => {
	return (dispatch) => {
		profileApi.getStatus(userId)
			.then(response => {
				dispatch(setProfileStatusActionCreator(response.data))
			})
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



