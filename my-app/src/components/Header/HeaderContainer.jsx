import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'

class HeaderContainer extends React.Component {
    render() {
        return <Header currentUser={this.props.currentUser}/>
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.profile.currentUser
    }
}

export default connect(mapStateToProps)(HeaderContainer)