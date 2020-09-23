import React from 'react'
import { connect } from 'react-redux'
import Chat from './Chat'
import HomePageContainer from './../HomePage/HomePageContainer'
import { getArticles, getMessages } from './../../redux/chat-selector'
import { setCurrentChatType } from '../../redux/chat-reducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class ChatContainer extends React.Component {

    componentDidMount() {
        let chatType = this.props.match.params.chatType
        this.props.setCurrentChatType(chatType)
    }

    render() {
        {
            return this.props.isUserAuthorised
                ? <Chat currentChatType={this.props.currentChatType}/>
                : <HomePageContainer/>
        }
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

export default compose(connect(mapStateToProps, {setCurrentChatType}), withRouter)(ChatContainer)
