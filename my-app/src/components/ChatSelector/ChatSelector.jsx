import React from 'react'
import s from './ChatSelector.module.scss'

const ChatSelector = () => {
    return <div className={s.ChatSelector}>
        <div className={s.BusinessChat}>
            <img src={'/business-chat.jpg'}/>
            <div className={s.BusinessChatText}>РАБОЧИЕ ВОПРОСЫ</div>
        </div>
        <div className={s.CasualChat}>
            <img src={'/casual-chat.jpg'}/>
            <div className={s.CasualChatText}>ФЛУД И ОБЩЕНИЕ</div>
        </div>
    </div>
}

export default ChatSelector