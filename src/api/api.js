import axios from 'axios'

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0'

const instanse = axios.create({
	withCredentials: true,
	headers: {
		'API-KEY': 'f51686d7-5655-4470-b046-3be0849cbed4'
	}
})

export const usersApi = {
	getUsers: (page, count) => {
		return instanse.get(BASE_URL + `/users?page=${page}&count=${count}`)
	},
	follow: (userId) => {
		return instanse.post(BASE_URL + `/follow/${userId}`)
	},
	unfollow: (userId) => {
		return instanse.delete(BASE_URL + `/follow/${userId}`)
	}
}