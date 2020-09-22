import React from 'react'
import './App.css'
import store from './redux/redux-store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import HomePage from './components/HomePage/HomePage'
import Header from './components/Header/Header'
import ChatSelector from './components/ChatSelector/ChatSelector'
import Chat from './components/Chat/Chat'
import UserProfile from './components/UserProfile/UserProfile'

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path={'/ChatSelector'} render={() => <ChatSelector/>}/>
                <Route path={'/Chat'} render={() => <Chat/>}/>
                <Route path={'/Profile'} render={() => <UserProfile/>}/>
                <Route path={'*'} render={() => <HomePage/>}/>
            </Switch>

        </div>
    )
}

const MyApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
}

export default MyApp
