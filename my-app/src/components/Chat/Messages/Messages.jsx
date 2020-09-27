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

    let [editMode, setEditMode] = useState(false)

    let finishEdit = (messageIndex) =>{
        editMessage(messageIndex)
        setEditMode(false)
    }

    let startEdit =(messageValue)=>{
        setEditMessageInputValue(messageValue)
        setEditMode(true)
    }

    let chatMessages = messages.map(m => m.author === author
        ? editMode
            ?
            <div className={s.Message}><b>{m.author}</b>: <input onChange={(e) => onEditMessageInput(e.target.value)}
                                                                 value={editMessageInput}
                                                                 type={'text'}/>
                <button onClick={() => finishEdit(messages.indexOf(m))} className={s.EditButton}>С</button>
            </div>

            : <div className={s.Message}><b>{m.author}</b>: {m.message}
                <button onClick={() => deleteMessage(messages.indexOf(m))} className={s.EditButton}>У</button>
                <button onClick={() => startEdit(m.message)} className={s.EditButton}>Р</button>
            </div>

        : <div className={s.Message}><b>{m.author}</b>: {m.message}</div>)

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