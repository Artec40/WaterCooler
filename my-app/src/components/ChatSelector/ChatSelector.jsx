import React from 'react'
import s from './ChatSelector.module.css'

const ChatSelector = () => {
    return <div className={s.ChatSelector}>
        <div className={s.BusinessChat}>Работа</div>
        <div className={s.CasualChat}>Общение</div>
    </div>
}

export default ChatSelector