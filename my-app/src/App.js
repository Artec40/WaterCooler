import React from 'react'
import './App.css'
import store from './redux/redux-store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import HomePageContainer from './components/HomePage/HomePageContainer'
import Header from './components/Header/Header'
import ChatSelectorContainer from './components/ChatSelector/ChatSelectorContainer'
import ChatContainer from './components/Chat/ChatContainer'
import UserProfileContainer from './components/UserProfile/UserProfileContainer'

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path={'/ChatSelector'} render={() => <ChatSelectorContainer/>}/>
                <Route path={'/businessChat'} render={() => <ChatContainer/>}/>
                <Route path={'/casualChat'} render={() => <ChatContainer/>}/>
                <Route path={'/Profile'} render={() => <UserProfileContainer/>}/>
                <Route path={'*'} render={() => <HomePageContainer/>}/>
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
