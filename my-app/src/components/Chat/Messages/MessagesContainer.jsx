import React from 'react'
import { connect } from 'react-redux'
import Messages from './Messages'
import {
    setCurrentMessagesByArticle,
    addMessage,
    onChangeMessageInput,
    deleteMessage,
    onEditMessageInput,
    editMessage,
    setEditMessageInputValue
} from './../../../redux/chat-action'

class MessagesContainer extends React.Component {

    componentDidMount() {
        this.props.setCurrentMessagesByArticle(this.props.currentChat, this.props.currentArticle)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.currentArticle !== prevProps.currentArticle
            || this.props.businessChat !== prevProps.businessChat
            || this.props.casualChat !== prevProps.casualChat)
            this.props.setCurrentMessagesByArticle(this.props.currentChat, this.props.currentArticle)
    }

    render() {
        return this.props.currentArticle
            && this.props.currentMessages
            && <Messages article={this.props.currentArticle}
                         messages={this.props.currentMessages}
                         messageInput={this.props.messageInput}
                         addMessage={() => this.props.addMessage(this.props.currentChat, this.props.author)}
                         onChangeMessageInput={this.props.onChangeMessageInput}
                         author={this.props.author}
                         deleteMessage={(messageId) => this.props.deleteMessage(this.props.currentChat, messageId)}
                         onEditMessageInput={this.props.onEditMessageInput}
                         editMessageInput={this.props.editMessageInput}
                         editMessage={(messageId) => this.props.editMessage(this.props.currentChat, messageId)}
                         setEditMessageInputValue={this.props.setEditMessageInputValue}/>
    }
}

const mapStateToProps = (state) => {
    return {
        businessChat: state.chat.businessChat,
        casualChat: state.chat.casualChat,
        currentArticle: state.chat.currentArticle,
        currentChat: state.chat.currentChatType,
        currentMessages: state.chat.currentMessages,
        messageInput: state.chat.messageInput,
        author: state.profile.currentUser.name,
        editMessageInput: state.chat.editMessageInput
    }
}

export default connect(mapStateToProps, {
    setCurrentMessagesByArticle,
    addMessage,
    onChangeMessageInput,
    deleteMessage,
    onEditMessageInput,
    editMessage,
    setEditMessageInputValue
})(MessagesContainer)