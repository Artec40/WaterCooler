export const SET_CHATS = 'SET_CHATS'
export const ADD_ARTICLE = 'ADD_ARTICLE'
export const ON_CHANGE_ARTICLE_INPUT = 'ON_CHANGE_ARTICLE_INPUT'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const ON_CHANGE_MESSAGE_INPUT = 'ON_CHANGE_MESSAGE_INPUT'
export const SET_CURRENT_CHAT_TYPE = 'SET_CURRENT_CHAT_TYPE'
export const SET_CURRENT_ARTICLE = 'SET_CURRENT_ARTICLE'
export const SET_CURRENT_MESSAGES_BY_ARTICLE = 'SET_CURRENT_MESSAGES_BY_ARTICLE'
export const CLEAN_CURRENT_CHAT_DATA = 'CLEAN_CURRENT_CHAT_DATA'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'
export const EDIT_MESSAGE = 'EDIT_MESSAGE'

export const setChats = (businessChat, casualChat) => ({type: SET_CHATS, businessChat, casualChat})
export const addArticle = (chatType) => ({type: ADD_ARTICLE, chatType})
export const onChangeArticleInput = (articleInput) => ({type: ON_CHANGE_ARTICLE_INPUT, articleInput})
export const addMessage = (chatType, author) => ({type: ADD_MESSAGE, chatType, author})
export const onChangeMessageInput = (messageInput) => ({type: ON_CHANGE_MESSAGE_INPUT, messageInput})
export const setCurrentChatType = (chatType) => ({type: SET_CURRENT_CHAT_TYPE, chatType})
export const setCurrentArticle = (article) => ({type: SET_CURRENT_ARTICLE, article})
export const setCurrentMessagesByArticle = (chatType, article) => ({
    type: SET_CURRENT_MESSAGES_BY_ARTICLE, chatType, article
})
export const cleanCurrentChatData = () => ({type: CLEAN_CURRENT_CHAT_DATA})
export const deleteMessage = (chatType, messageId) => ({type: DELETE_MESSAGE, chatType, messageId})
export const editMessage = (chatType, messageId) => ({type: EDIT_MESSAGE, chatType, messageId})
