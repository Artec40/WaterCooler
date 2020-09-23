import React from 'react'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return <div className={s.Header}>
        <NavLink to={'/chatSelector'}><img src={'/water-cooler.png'}/></NavLink>
        <div className={s.Title}>WATERCOOLER</div>
        <NavLink to={'/Profile'} className={s.User}>
            <img src={'/user-icon.jpg'}/>
            Пользователь
        </NavLink>

    </div>
}

export default Header