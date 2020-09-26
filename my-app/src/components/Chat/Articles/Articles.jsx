import React from 'react'
import s from './../Chat.module.scss'
import { NavLink } from 'react-router-dom'

const Articles = ({articles, setCurrentArticle}) => {

    let chatArticles = articles.map(a => <NavLink onClick={()=>{setCurrentArticle(a)}}
                                                  to={'/chat/business/article/' + articles.indexOf(a)}>
        <div>{a}</div>
    </NavLink>)

    return <div className={s.Articles}>
        <div className={s.Title}>Темы разговора:</div>
        {chatArticles}
        <input type={'text'} placeholder={'Введите название темы'}/>
        <button>Создать новую тему</button>
    </div>

}

export default Articles