import React from 'react'
import HomePage from './HomePage'
import { connect } from 'react-redux'
import { onInputNameChange, onInputPasswordChange, setUserData} from '../../redux/profile-action'
import { getChats } from '../../redux/chat-reducer'
import { setUserDataFromCookies } from '../../redux/profile-action'

class HomePageContainer extends React.Component {

    componentDidMount() {
        this.props.getChats()
        window.localStorage.userName
        && window.localStorage.userPassword
        && this.props.setUserDataFromCookies()
    }

    render() {
        return <HomePage
            inputName={this.props.inputName}
            inputPassword={this.props.inputPassword}
            onInputNameChange={this.props.onInputNameChange}
            onInputPasswordChange={this.props.onInputPasswordChange}
            setUserData={this.props.setUserData}
            isUserAuthorised={this.props.isUserAuthorised}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        isUserAuthorised: state.profile.isUserAuthorised,
        inputName: state.profile.inputName,
        inputPassword: state.profile.inputPassword,
    }
}

export default connect(mapStateToProps, {onInputNameChange, onInputPasswordChange, setUserData, setUserDataFromCookies, getChats})(HomePageContainer)