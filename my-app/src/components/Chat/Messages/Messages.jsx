import React from 'react'
import s from './../Chat.module.scss'

const Messages = () => {
    return <div className={s.Messages}>
            <div className={s.Title}>Сообщения:</div>
            <div>Юрий: бла-бла-бла</div>
            <div>Евгений: бла-бла-бла</div>
            <div>Владимир: бла-бла-бла</div>
            <div>Ольга: бла-бла-бла</div>
            <input type={'text'} placeholder={'Введите сообщение'}/>
            <button>Добавить сообщение</button>
        </div>
}

export default Messages