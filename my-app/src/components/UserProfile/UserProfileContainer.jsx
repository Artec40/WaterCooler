import React from 'react'
import { connect } from 'react-redux'
import UserProfile from './UserProfile'
import HomePageContainer from '../HomePage/HomePageContainer'

class UserProfileContainer extends React.Component {
    render() {
        return this.props.isUserAuthorised
            ? <UserProfile/>
            : <HomePageContainer/>
    }
}

const mapStateToProps = (state) => {
    return {
        isUserAuthorised: state.profile.isUserAuthorised
    }
}

export default connect(mapStateToProps)(UserProfileContainer)