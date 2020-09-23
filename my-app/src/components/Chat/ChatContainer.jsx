import React from 'react'
import { connect } from 'react-redux'
import Chat from './Chat'
import HomePageContainer from './../HomePage/HomePageContainer'

class ChatContainer extends React.Component {

    render() {
        return this.props.isUserAuthorised
            ? <Chat/>
            : <HomePageContainer/>
    }
}

const mapStateToProps = (state) => {
    return {
        isUserAuthorised: state.profile.isUserAuthorised
    }
}

export default connect(mapStateToProps)(ChatContainer)