import { authApi } from '../api/api.js'

const SET_AUTH_DATA = 'otriayd-network/auth/SET_AUTH_DATA'

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
			}
		default: return state
	}
}

export const setAuthDataActionCreator = (id, login, email, isAuth) => {
	return {
		type: SET_AUTH_DATA,
		data: { id, login, email, isAuth }
	}
}

export const setAuthDataThunkCreator = () => {
	return async (dispatch) => {
		const response = await authApi.authMe()
		if (response.data.resultCode === 0) {
			const { id, login, email } = response.data.data
			dispatch(setAuthDataActionCreator(id, login, email, true))
		}
	}
}

export const login = (formData) => {
	return async (dispatch) => {
		const response = await authApi.login(formData.login, formData.password, formData.rememberMe)
		if (response.data.resultCode === 0) {
			const response = await authApi.authMe()
			if (response.data.resultCode === 0) {
				const { id, login, email } = response.data.data
				dispatch(setAuthDataActionCreator(id, login, email, true))
			}
		}
	}
}

export const logout = () => {
	return async (dispatch) => {
		const response = await authApi.logout()
		if (response.data.resultCode === 0) {
			dispatch(setAuthDataActionCreator(null, null, null, false))
		}
	}
}



