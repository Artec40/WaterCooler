import React from 'react'
import { connect } from 'react-redux'
import ChatSelector from './ChatSelector'
import HomePageContainer from './../HomePage/HomePageContainer'

class ChatSelectorContainer extends React.Component {

    render() {
        return this.props.isUserAuthorised
            ? <ChatSelector/>
            : <HomePageContainer/>
    }
}

const mapStateToProps = (state) => {
    return {
        isUserAuthorised: state.profile.isUserAuthorised
    }
}

export default connect(mapStateToProps)(ChatSelectorContainer)