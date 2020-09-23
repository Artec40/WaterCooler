const SET_USER_DATA = 'SET_USER_DATA'
const CHANGE_INPUT_NAME = 'CHANGE_INPUT_NAME'
const CHANGE_INPUT_PASSWORD = 'CHANGE_INPUT_PASSWORD'

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
            if (user.length !== 0)
                return {
                    ...state, currentUser: user[0], isUserAuthorised: true
                }
            else
                return {
                    ...state
                }
        default:
            return state
    }
}

export const setUserData = () => ({type: SET_USER_DATA})
export const onInputNameChange = (name) => ({type: CHANGE_INPUT_NAME, name})
export const onInputPasswordChange = (password) => ({type: CHANGE_INPUT_PASSWORD, password})

export default profileReducer