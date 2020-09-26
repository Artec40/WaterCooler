import React from 'react'
import { connect } from 'react-redux'
import Articles from './Articles'
import { getArticles } from './../../../redux/chat-selector'
import { setCurrentArticle } from './../../../redux/chat-reducer'
import { setCurrentMessagesByArticle } from './../../../redux/chat-reducer'

class ArticlesContainer extends React.Component {

    render() {
        return <Articles articles={this.props.articles}
                         setCurrentArticle={this.props.setCurrentArticle}/>
    }
}

const mapStateToProps = (state) => {
    return {
        currentArticle: state.chat.currentArticle,
        currentChat: state.chat.currentChatType,
        articles: getArticles(state, state.chat.currentChatType)
    }
}

export default connect(mapStateToProps, {setCurrentArticle,setCurrentMessagesByArticle})(ArticlesContainer)