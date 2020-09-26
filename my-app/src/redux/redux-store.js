import {combineReducers, createStore } from 'redux'
import profileReducer from './profile-reducer'
import chatReducer from './chat-reducer'

let reducers = combineReducers({
    profile: profileReducer,

    chat: chatReducer
})

let store = createStore(reducers)

window.store = store
export default store