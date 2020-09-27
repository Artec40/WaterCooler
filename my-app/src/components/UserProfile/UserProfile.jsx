import React from 'react'
import s from './UserProfile.module.scss'

const UserProfile = ({photo, name, status, post}) => {
    return <div className={s.UserProfile}>
        <div className={s.Photo}>
            <div>
                <img src={photo === '' ? '/user-icon.jpg' : photo} alt={'for avatar'}/>
            </div>
            <button>Сменить аватар</button>
        </div>
        <div className={s.Description}>
            <div className={s.DescriptionText}><b>Имя: </b>{name}</div>
            <div className={s.DescriptionText}><b>Статус: </b>{status}</div>
            <div className={s.DescriptionText}><b>Должность: </b>{post}</div>
        </div>
    </div>
}

export default UserProfile