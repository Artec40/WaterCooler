import React from 'react'
import s from './Chat.module.scss'

const Chat = () => {
    return <div className={s.Chat}>
        <div className={s.Articles}>
            <div className={s.Title}>Темы разговора:</div>
            <div>бла-бла-бла</div>
            <div>бла-бла-бла</div>
            <div>бла-бла-бла</div>
            <div>бла-бла-бла</div>
            <input type={'text'} placeholder={'Введите название темы'}/>
            <button>Создать новую тему</button>
        </div>
        <div className={s.Messages}>
            <div className={s.Title}>Сообщения:</div>
            <div>Юрий: бла-бла-бла</div>
            <div>Евгений: бла-бла-бла</div>
            <div>Владимир: бла-бла-бла</div>
            <div>Ольга: бла-бла-бла</div>
            <input type={'text'} placeholder={'Введите сообщение'}/>
            <button>Добавить сообщение</button>
        </div>
    </div>
}

export default Chat