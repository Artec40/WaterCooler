import { applyMiddleware, combineReducers, createStore } from 'redux'
import profileReducer from './profile-reducer'
import thunkMiddleware from 'redux-thunk'
import chatReducer from './chat-reducer'

let reducers = combineReducers({
    profile: profileReducer,

    chat: chatReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store