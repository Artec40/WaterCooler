import React from 'react'
import { connect } from 'react-redux'
import Articles from './Articles'
import { getArticles } from './../../../redux/chat-selector'
import {
    setCurrentArticle,
    setCurrentMessagesByArticle,
    addArticle,
    onChangeArticleInput
} from './../../../redux/chat-action'

class ArticlesContainer extends React.Component {

    render() {
        return <Articles articles={this.props.articles}
                         setCurrentArticle={this.props.setCurrentArticle}
                         articleInput={this.props.articleInput}
                         addArticle={() => this.props.addArticle(this.props.currentChat)}
                         onChangeArticleInput={this.props.onChangeArticleInput}/>
    }
}

const mapStateToProps = (state) => {
    return {
        currentArticle: state.chat.currentArticle,
        currentChat: state.chat.currentChatType,
        articles: getArticles(state, state.chat.currentChatType),
        articleInput: state.chat.articleInput
    }
}

export default connect(mapStateToProps, {
    setCurrentArticle,
    setCurrentMessagesByArticle,
    addArticle,
    onChangeArticleInput
})(ArticlesContainer)