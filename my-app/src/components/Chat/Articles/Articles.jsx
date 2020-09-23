import React from 'react'
import s from './../Chat.module.scss'

const Articles = () => {
    return <div className={s.Articles}>
        <div className={s.Title}>Темы разговора:</div>
        <div>бла-бла-бла</div>
        <div>бла-бла-бла</div>
        <div>бла-бла-бла</div>
        <div>бла-бла-бла</div>
        <input type={'text'} placeholder={'Введите название темы'}/>
        <button>Создать новую тему</button>
    </div>

}

export default Articles