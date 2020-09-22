import React from 'react'
import s from './Header.module.scss'

const Header = () => {
    return <div className={s.Header}>
        <img className={s.Icon} src={'/water-cooler.png'}/>
        <div className={s.Title}>WATERCOOLER</div>
        <div className={s.User}>
            <img src={'/water-cooler.png'}/>
            Пользователь
        </div>

    </div>
}

export default Header