import React from 'react'
import s from './ChatSelector.module.scss'
import { NavLink } from 'react-router-dom'

const ChatSelector = () => {
    return <div className={s.ChatSelector}>
        <NavLink to={'/businessChat'} className={s.BusinessChat}>
            <img src={'/business-chat.jpg'}/>
            <div className={s.BusinessChatText}>РАБОЧИЕ ВОПРОСЫ</div>
        </NavLink>
        <NavLink to={'/casualChat'} className={s.CasualChat}>
            <img src={'/casual-chat.jpg'}/>
            <div className={s.CasualChatText}>ФЛУД И ОБЩЕНИЕ</div>
        </NavLink>
    </div>
}

export default ChatSelector