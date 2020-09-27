export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_USER_DATA_FROM_COOKIES = 'SET_USER_DATA_FROM_COOKIES'
export const CHANGE_INPUT_NAME = 'CHANGE_INPUT_NAME'
export const CHANGE_INPUT_PASSWORD = 'CHANGE_INPUT_PASSWORD'
export const LOGOUT = 'LOGOUT'

export const setUserData = () => ({type: SET_USER_DATA})
export const setUserDataFromCookies = () => ({type: SET_USER_DATA_FROM_COOKIES})
export const onInputNameChange = (name) => ({type: CHANGE_INPUT_NAME, name})
export const onInputPasswordChange = (password) => ({type: CHANGE_INPUT_PASSWORD, password})
export const logout = () => ({type: LOGOUT})