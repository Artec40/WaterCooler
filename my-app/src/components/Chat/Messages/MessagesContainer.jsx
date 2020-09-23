import React from 'react'
import { connect } from 'react-redux'
import Messages from './Messages'
import HomePageContainer from './../HomePage/HomePageContainer'

class MessagesContainer extends React.Component {

    render() {
        return <Messages/>
/*        return this.isUserAuthorised
            ? <Articles/>
            : <HomePageContainer/>*/
    }
}

const mapStateToProps = (state) => {
    return {
        isUserAuthorised: state.profile.isUserAuthorised
    }
}

export default connect(mapStateToProps)(MessagesContainer)