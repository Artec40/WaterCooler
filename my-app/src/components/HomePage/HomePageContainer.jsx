import React from 'react'
import HomePage from './HomePage'
import { connect } from 'react-redux'
import { onInputNameChange, onInputPasswordChange, setUserData } from '../../redux/profile-reducer'

class HomePageContainer extends React.Component {
    render() {
        return <HomePage
            inputName={this.props.inputName}
            inputPassword={this.props.inputPassword}
            onInputNameChange={this.props.onInputNameChange}
            onInputPasswordChange={this.props.onInputPasswordChange}
            setUserData={this.props.setUserData}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        inputName: state.profile.inputName,
        inputPassword: state.profile.inputPassword,
    }
}

export default connect(mapStateToProps, {onInputNameChange, onInputPasswordChange, setUserData})(HomePageContainer)