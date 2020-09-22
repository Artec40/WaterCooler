import React from 'react'
import s from './UserProfile.module.css'

const UserProfile = () => {
    return <div className={s.UserProfile}>
        <div className={s.Photo}>
            <div>Аватар</div>
            <button>Сменить аватар</button>
        </div>
        <div className={s.Description}>
            <div>Имя</div>
            <div>Статус</div>
            <div>Должность</div>
        </div>
    </div>
}

export default UserProfile