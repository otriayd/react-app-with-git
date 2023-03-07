import { applyMiddleware, combineReducers, createStore } from 'redux'
import { usersReducer } from './users-reducer'
import thunkMiddleware from 'redux-thunk'


const reducers = combineReducers({
	usersPage: usersReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))