import React from 'react'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = ({currentUser, logout}) => {

    let user = currentUser
        ? <div>{currentUser.name}
            <button onClick={() => logout()}>X</button>
        </div>
        : <div>{'Пользователь'}</div>

    return <div className={s.Header}>
        <NavLink to={'/chatSelector'}><img src={'/water-cooler.png'} alt={'for logo'}/></NavLink>
        <div className={s.Title}>WATERCOOLER</div>

        <NavLink to={'/Profile'} className={s.User}>
            <img src={((!!currentUser) && currentUser.avatarURL) || '/user-icon.jpg'} alt={'for avatar'}/>
            {user}
        </NavLink>

    </div>
}

export default Header