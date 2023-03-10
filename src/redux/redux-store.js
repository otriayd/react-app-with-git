import { applyMiddleware, combineReducers, createStore } from 'redux'
import { usersReducer } from './users-reducer'
import thunkMiddleware from 'redux-thunk'
import { profileReducer } from './profile-reducer'
import { authReducer } from './auth-reducer'


const reducers = combineReducers({
	usersPage: usersReducer,
	profilePage: profileReducer,
	auth: authReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))