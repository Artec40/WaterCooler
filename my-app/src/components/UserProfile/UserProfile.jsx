import React from 'react'
import s from './UserProfile.module.scss'

const UserProfile = () => {
    return <div className={s.UserProfile}>
        <div className={s.Photo}>
            <div>
                <img src={'/user-icon.jpg'}/>
            </div>
            <button>Сменить аватар</button>
        </div>
        <div className={s.Description}>
            <div className={s.DescriptionText}><b>Имя:</b> Андрей</div>
            <div className={s.DescriptionText}><b>Статус:</b> В поиске приключений</div>
            <div className={s.DescriptionText}><b>Должность:</b> Junior Frontend-разработчик</div>
        </div>
    </div>
}

export default UserProfile