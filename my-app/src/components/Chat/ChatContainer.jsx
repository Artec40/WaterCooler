import React from 'react'
import { connect } from 'react-redux'
import Chat from './Chat'
import HomePageContainer from './../HomePage/HomePageContainer'
import { setCurrentChatType, cleanCurrentChatData } from '../../redux/chat-action'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class ChatContainer extends React.Component {

    componentDidMount() {
        let chatType = this.props.match.params.chatType
        this.props.setCurrentChatType(chatType)
        this.props.cleanCurrentChatData()
    }

    render() {
        return this.props.isUserAuthorised
            ? this.props.currentChatType
            && <Chat/>
            : <HomePageContainer/>
    }
}

const mapStateToProps = (state) => {
    return {
        isUserAuthorised: state.profile.isUserAuthorised,
        businessChat: state.chat.chatType.business,
        casualChat: state.chat.chatType.casual,
        currentChatType: state.chat.currentChatType
    }
}

export default compose(connect(mapStateToProps, {setCurrentChatType, cleanCurrentChatData}), withRouter)(ChatContainer)
