import React from 'react'
import { connect } from 'react-redux'
import Articles from './Articles'
import HomePageContainer from './../HomePage/HomePageContainer'

class ArticlesContainer extends React.Component {

    render() {
        return <Articles/>
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

export default connect(mapStateToProps)(ArticlesContainer)