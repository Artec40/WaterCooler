import React from 'react'
import s from './Chat.module.scss'
import Articles from './Articles/Articles'
import Messages from './Messages/Messages'

const Chat = () => {
    return <div className={s.Chat}>
        <Articles/>
        <Messages/>
    </div>
}

export default Chat