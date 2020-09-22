import React from 'react'
import s from './HomePage.module.scss'

const HomePage = () => {
    return <div className={s.HomePage}>
        <div><img src={'/home.jpg'}/></div>
        <div>Введите логин</div>
        <input type={'text'} placeholder={'логин'}/>
        <div>Введите пароль</div>
        <input type={'text'} placeholder={'пароль'}/>
        <div>
            <button>Присоединиться</button>
        </div>
    </div>
}

export default HomePage