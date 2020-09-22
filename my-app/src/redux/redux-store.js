import {combineReducers, createStore } from 'redux'
import loginReducer from './login-reducer'
import headerReducer from './header-reducer'
import profileReducer from './profile-reducer'
import chatReducer from './chat-reducer'

let reducers = combineReducers({
    profile: profileReducer,
    loginPage: loginReducer,
    header: headerReducer,
    chat: chatReducer
})

let store = createStore(reducers)

window.store = store
export default store