import React from 'react'
import s from './../Chat.module.scss'

const Messages = ({article, messages, messageInput, onChangeMessageInput, addMessage}) => {

    let chatMessages = messages.map(m => <div className={s.Message}><b>{m.author}</b>: {m.message}</div>)

    return <div className={s.Messages}>
        <div className={s.Title}>{article}</div>
        {chatMessages}
        <input onChange={(e) => onChangeMessageInput(e.target.value)}
               placeholder={'Введите сообщение'}
               value={messageInput}
               type={'text'}/>
        <button onClick={()=>addMessage()}>Добавить сообщение</button>
    </div>
}

export default Messages