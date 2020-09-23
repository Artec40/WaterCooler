import React from 'react'
import s from './Chat.module.scss'
import ArticlesContainer from './Articles/ArticlesContainer'
import MessagesContainer from './Messages/MessagesContainer'

const Chat = () => {
    return <div className={s.Chat}>
        <ArticlesContainer/>
        <MessagesContainer/>
    </div>
}

export default Chat