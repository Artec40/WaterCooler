import React from 'react'
import s from './Chat.module.css'

const Chat = () => {
    return <div className={s.Chat}>
        <div className={s.Articles}>Темы</div>
        <div className={s.Messages}>Сообщения</div>
    </div>
}

export default Chat