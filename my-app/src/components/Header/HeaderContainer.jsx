import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logout } from './../../redux/profile-action'

class HeaderContainer extends React.Component {
    render() {
        return <Header currentUser={this.props.currentUser}
        logout={this.props.logout}/>
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.profile.currentUser
    }
}

export default connect(mapStateToProps,{logout})(HeaderContainer)