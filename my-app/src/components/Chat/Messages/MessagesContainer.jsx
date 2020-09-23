import React from 'react'
import { connect } from 'react-redux'
import Messages from './Messages'

class MessagesContainer extends React.Component {

    render() {
        return <Messages/>
    }
}

const mapStateToProps = (state) => {
    return {
        isUserAuthorised: state.profile.isUserAuthorised
    }
}

export default connect(mapStateToProps)(MessagesContainer)