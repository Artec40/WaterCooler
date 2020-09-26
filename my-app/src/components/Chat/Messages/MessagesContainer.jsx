import React from 'react'
import { connect } from 'react-redux'
import Messages from './Messages'
import { setCurrentMessagesByArticle } from './../../../redux/chat-reducer'

class MessagesContainer extends React.Component {

    componentDidMount() {
        this.props.setCurrentMessagesByArticle(this.props.currentChat, this.props.currentArticle)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.currentArticle !== prevProps.currentArticle
        && this.props.setCurrentMessagesByArticle(this.props.currentChat, this.props.currentArticle)
    }

    render() {
        return this.props.currentArticle
            && this.props.currentMessages
            && <Messages article={this.props.currentArticle}
                         messages={this.props.currentMessages}/>
    }
}

const mapStateToProps = (state) => {
    return {
        currentArticle: state.chat.currentArticle,
        currentChat: state.chat.currentChatType,
        currentMessages: state.chat.currentMessages
    }
}

export default connect(mapStateToProps, {setCurrentMessagesByArticle})(MessagesContainer)