import React from 'react'
import { connect } from 'react-redux'
import Articles from './Articles'
import { getArticles } from './../../../redux/chat-selector'

class ArticlesContainer extends React.Component {

    render() {
        debugger
        return <Articles articles={this.props.articles}/>
    }
}

const mapStateToProps = (state) => {
    return {
        articles: getArticles(state, state.chat.currentChatType)
    }
}

export default connect(mapStateToProps)(ArticlesContainer)