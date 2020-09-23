import React from 'react'
import { connect } from 'react-redux'
import ChatSelector from './ChatSelector'
import HomePageContainer from './../HomePage/HomePageContainer'

class ChatSelectorContainer extends React.Component {

    render() {
        return this.props.isUserAuthorised
            ? <ChatSelector
                businessChat={this.props.businessChat}
                casualChat={this.props.casualChat}/>
            : <HomePageContainer/>
    }
}

const mapStateToProps = (state) => {
    return {
        isUserAuthorised: state.profile.isUserAuthorised,
        businessChat: state.chat.chatType.business,
        casualChat: state.chat.chatType.casual
    }
}

export default connect(mapStateToProps)(ChatSelectorContainer)