import React from 'react'
import s from './../Chat.module.scss'

const Articles = ({articles}) => {

    let chatArticles = articles.map(a=><div>{a}</div>)

    return <div className={s.Articles}>
        <div className={s.Title}>Темы разговора:</div>
        {chatArticles}
        <input type={'text'} placeholder={'Введите название темы'}/>
        <button>Создать новую тему</button>
    </div>

}

export default Articles