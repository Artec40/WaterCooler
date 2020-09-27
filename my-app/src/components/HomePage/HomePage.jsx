import React from 'react'
import s from './HomePage.module.scss'
import { NavLink } from 'react-router-dom'

const HomePage = ({inputName, inputPassword, onInputNameChange, onInputPasswordChange, setUserData, isUserAuthorised}) => {

    let loginWindow = isUserAuthorised
        ? <NavLink to={'/chatSelector'}>Перейти к беседам</NavLink>
        : <div>
            <div>Введите логин</div>
            <input onChange={(e) => {
                onInputNameChange(e.target.value)
            }}
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


    return <div className={s.HomePage}>
        <div><img src={'/home.jpg'} alt={'for homePage'}/></div>
        {loginWindow}
    </div>
}

export default HomePage