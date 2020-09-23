import React from 'react'
import s from './HomePage.module.scss'
import { NavLink } from 'react-router-dom'

const HomePage = ({inputName, inputPassword, onInputNameChange, onInputPasswordChange, setUserData}) => {

    return <div className={s.HomePage}>
        <div><img src={'/home.jpg'}/></div>
        <div>Введите логин</div>
        <input onChange={(e) => {onInputNameChange(e.target.value)}}
               type={'text'}
               placeholder={'логин'}
               value={inputName}/>
        <div>Введите пароль</div>
        <input onChange={(e) => onInputPasswordChange(e.target.value)}
               type={'text'}
               placeholder={'пароль'}
               value={inputPassword}/>
        <div>
            <NavLink to={'/chatSelector'}>
                <button onClick={setUserData}>Присоединиться</button>
            </NavLink>
        </div>
    </div>
}

export default HomePage