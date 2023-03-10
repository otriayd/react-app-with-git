import { authApi } from '../api/api.js'

const SET_AUTH_DATA = 'SET_AUTH_DATA'

const initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false
}

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			}
		default: return state
	}
}

export const setAuthDataActionCreator = (id, login, email) => {
	return {
		type: SET_AUTH_DATA,
		data: { id, login, email }
	}
}

export const setAuthDataThunkCreator = () => {
	return (dispatch) => {
		authApi.authMe()
			.then(response => {
				if (response.data.resultCode === 0) {
					const { id, login, email } = response.data.data
					dispatch(setAuthDataActionCreator(id, login, email))
				}
			})
	}
}



