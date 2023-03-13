import { applyMiddleware, combineReducers, createStore } from 'redux'
import { usersReducer } from './users-reducer'
import thunkMiddleware from 'redux-thunk'
import { profileReducer } from './profile-reducer'
import { authReducer } from './auth-reducer'
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
	usersPage: usersReducer,
	profilePage: profileReducer,
	auth: authReducer,
	form: formReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))