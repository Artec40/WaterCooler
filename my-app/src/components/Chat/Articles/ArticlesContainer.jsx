import React from 'react'
import { connect } from 'react-redux'
import Articles from './Articles'

class ArticlesContainer extends React.Component {

    render() {
        return <Articles/>
    }
}

const mapStateToProps = (state) => {
    return {
        isUserAuthorised: state.profile.isUserAuthorised
    }
}

export default connect(mapStateToProps)(ArticlesContainer)