import React from 'react'
import s from './../Chat.module.scss'

const Messages = ({article, messages}) => {

    let chatMessages = messages.map(m => <div className={s.Message}><b>{m.author}</b>: {m.message}</div>)

    return <div className={s.Messages}>
            <div className={s.Title}>{article}</div>
        {chatMessages}
            <input type={'text'} placeholder={'Введите сообщение'}/>
            <button>Добавить сообщение</button>
        </div>
}

export default Messages