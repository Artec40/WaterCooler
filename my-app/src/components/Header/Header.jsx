import React from 'react'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = ({currentUser}) => {
    return <div className={s.Header}>
        <NavLink to={'/chatSelector'}><img src={'/water-cooler.png'}/></NavLink>
        <div className={s.Title}>WATERCOOLER</div>
        <NavLink to={'/Profile'} className={s.User}>
            <img src={(!!currentUser) && currentUser.avatarURL || '/user-icon.jpg'}/>
            <div>{currentUser ? currentUser.name : 'Пользователь'}</div>
        </NavLink>

    </div>
}

export default Header