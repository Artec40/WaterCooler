import {
    CHANGE_INPUT_NAME,
    CHANGE_INPUT_PASSWORD,
    SET_USER_DATA,
    SET_USER_DATA_FROM_COOKIES,
    LOGOUT
} from './profile-action'

let initialState = {
    users: [
        {
            account: 'user1',
            password: 'user1',
            name: 'Уилл Тёрнер',
            status: 'В работе',
            post: 'Senior frontend-разработчик',
            avatarURL: ''
        },
        {
            account: 'user2',
            password: 'user2',
            name: 'Андрей Колосов',
            status: 'В поиске приключений',
            post: 'Junior frontend-разработчик',
            avatarURL: ''
        },
        {
            account: 'user3',
            password: 'user3',
            name: 'Капитан Джек Воробей',
            status: 'В отпуске',
            post: 'frontend team lead',
            avatarURL: ''
        },
        {
            account: 'user4',
            password: 'user4',
            name: 'Элизабет Суонн',
            status: 'В работе',
            post: 'Middle frontend-разработчик',
            avatarURL: ''
        },
    ],
    currentUser: null,
    isUserAuthorised: false,
    inputName: '',
    inputPassword: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_NAME:
            return {
                ...state, inputName: action.name
            }
        case CHANGE_INPUT_PASSWORD:
            return {
                ...state, inputPassword: action.password
            }
        case SET_USER_DATA:
            let user = state.users.filter(u => u.account === state.inputName && u.password === state.inputPassword)
            if (user.length !== 0) {
                window.localStorage.userName = state.inputName
                window.localStorage.userPassword = state.inputPassword
                return {
                    ...state, currentUser: user[0], isUserAuthorised: true,
                }
            }
            else
                alert('Неверные данные. Для теста попробуйте user1 user1.')
            return {
                ...state
            }
        case SET_USER_DATA_FROM_COOKIES:
            let userFromCookies = state.users.filter(u => u.account === window.localStorage.userName
                && u.password === window.localStorage.userPassword)
            if (userFromCookies.length !== 0) {
                return {
                    ...state, currentUser: userFromCookies[0], isUserAuthorised: true,
                }
            }
            else
                return {
                    ...state
                }
        case LOGOUT:
            window.localStorage.removeItem('userName')
            window.localStorage.removeItem('userPassword')
            return {
                ...state, currentUser: null, isUserAuthorised: false, inputName: '', inputPassword: ''
            }
        default:
            return state
    }
}

export default profileReducer