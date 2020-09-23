import React from 'react'
import { connect } from 'react-redux'
import UserProfile from './UserProfile'
import HomePageContainer from '../HomePage/HomePageContainer'

class UserProfileContainer extends React.Component {
    render() {
        return this.props.isUserAuthorised
            ? <UserProfile
                photo={this.props.currentUser.avatarURL}
                name={this.props.currentUser.name}
                status={this.props.currentUser.status}
                post={this.props.currentUser.post}/>
            : <HomePageContainer/>
    }
}

const mapStateToProps = (state) => {
    return {
        isUserAuthorised: state.profile.isUserAuthorised,
        currentUser: state.profile.currentUser
    }
}

export default connect(mapStateToProps)(UserProfileContainer)