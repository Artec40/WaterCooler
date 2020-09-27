import React, { useState } from 'react'
import s from './../Chat.module.scss'

const Messages = ({
                      article,
                      messages,
                      messageInput,
                      onChangeMessageInput,
                      addMessage,
                      author,
                      deleteMessage,
                      onEditMessageInput,
                      editMessageInput,
                      editMessage,
                      setEditMessageInputValue
                  }) => {

    let [editField, setEditField] = useState('')

    let finishEdit = (messageIndex) => {
        editMessage(messageIndex)
        setEditField('')
    }

    let startEdit = (messageId, messageValue) => {
        setEditMessageInputValue(messageValue)
        setEditField(messageId)
    }

    let chatMessages = messages.map(m => m.author === author
        ? editField===m.id
            ?
            <div key={m.id} className={s.Message}><b>{m.author}</b>: <input onChange={(e) => onEditMessageInput(e.target.value)}
                                                                 value={editMessageInput}
                                                                 type={'text'}/>
                <button onClick={() => finishEdit(m.id)} className={s.EditButton}>С</button>
            </div>
            : <div key={m.id} className={s.Message}><b>{m.author}</b>: {m.message}
                <button onClick={() => deleteMessage(m.id)} className={s.EditButton}>У</button>
                <button onClick={() => startEdit(m.id, m.message)} className={s.EditButton}>Р</button>
            </div>

        : <div key={m.id} className={s.Message}><b>{m.author}</b>: {m.message}</div>)

    return <div className={s.Messages}>
        <div className={s.Title}>{article}</div>
        {chatMessages}
        <input onChange={(e) => onChangeMessageInput(e.target.value)}
               placeholder={'Введите сообщение'}
               value={messageInput}
               type={'text'}/>
        <button onClick={() => addMessage()}>Добавить сообщение</button>
    </div>
}

export default Messages