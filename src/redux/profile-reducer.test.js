import { addPostActionCreator, profileReducer } from './profile-reducer'

it('new post should be added', () => {
	const action = addPostActionCreator('it-kamasutra.com')
	const state = {
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
	const newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(5)
})






