import {
    SET_CHATS,
    ADD_ARTICLE,
    ADD_MESSAGE,
    CLEAN_CURRENT_CHAT_DATA,
    ON_CHANGE_ARTICLE_INPUT,
    ON_CHANGE_MESSAGE_INPUT,
    SET_CURRENT_ARTICLE,
    SET_CURRENT_CHAT_TYPE,
    SET_CURRENT_MESSAGES_BY_ARTICLE,
    DELETE_MESSAGE,
    EDIT_MESSAGE
} from './chat-action'
import { setChats } from './chat-action'

let initialState = {
    businessChat: [],
    casualChat: [],
    chatType: {
        business: 'business',
        casual: 'casual'
    },
    currentChatType: '',
    currentArticle: '',
    currentMessages: [],
    articleInput: '',
    messageInput: '',
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHATS: {
            return {
                ...state, businessChat: action.businessChat, casualChat: action.casualChat
            }
        }
        case ADD_ARTICLE: {
            if (action.chatType === state.chatType.business) {
                return {
                    ...state, businessChat: [...state.businessChat, {article: state.articleInput, messages: []}],
                    articleInput: ''
                }
            }
            if (action.chatType === state.chatType.casual) {
                return {
                    ...state, casualChat: [...state.casualChat, {article: state.articleInput, messages: []}],
                    articleInput: ''
                }
            }
            else
                return {
                    ...state
                }
        }
        case ON_CHANGE_ARTICLE_INPUT: {
            return {
                ...state, articleInput: action.articleInput
            }
        }
        case ADD_MESSAGE: {
            if (action.chatType === state.chatType.business) {
                return {
                    ...state,
                    businessChat: [...state.businessChat.map(c => c.article === state.currentArticle
                        ? {
                            article: state.currentArticle,
                            messages: [...c.messages, {author: action.author, message: state.messageInput}]
                        }
                        : c)],
                    messageInput: ''
                }
            }
            if (action.chatType === state.chatType.casual) {
                return {
                    ...state,
                    casualChat: [...state.casualChat.map(c => c.article === state.currentArticle
                        ? {
                            article: state.currentArticle,
                            messages: [...c.messages, {author: action.author, message: state.messageInput}]
                        }
                        : c)],
                    messageInput: ''
                }
            }
            else
                return {
                    ...state
                }
        }
        case ON_CHANGE_MESSAGE_INPUT: {
            return {
                ...state, messageInput: action.messageInput
            }
        }
        case SET_CURRENT_CHAT_TYPE: {
            return {
                ...state, currentChatType: action.chatType
            }
        }
        case SET_CURRENT_ARTICLE: {
            return {
                ...state, currentArticle: action.article
            }
        }
        case SET_CURRENT_MESSAGES_BY_ARTICLE: {
            if (action.chatType === state.chatType.business) {
                let correspondence = state.businessChat.filter(c => c.article === action.article)
                if (correspondence.length !== 0)
                    return {
                        ...state, currentMessages: correspondence[0].messages
                    }
            }
            if (action.chatType === state.chatType.casual) {
                let correspondence = state.casualChat.filter(c => c.article === action.article)
                if (correspondence.length !== 0)
                    return {
                        ...state, currentMessages: correspondence[0].messages
                    }
            }
            else
                return {
                    ...state
                }
        }
        case CLEAN_CURRENT_CHAT_DATA: {
            return {
                ...state, currentArticle: '', currentMessages: []
            }
        }
        case DELETE_MESSAGE: {
            debugger
            if (action.chatType === state.chatType.business) {
                return {
                    ...state,
                    businessChat: [...state.businessChat.map(c => c.article === state.currentArticle
                        ? {
                            article: state.currentArticle,
                            messages: [...c.messages.filter((m, index) => index !== action.messageId)]
                        }
                        : c)],
                }
            }
            if (action.chatType === state.chatType.casual) {
                return {
                    ...state
                }
            }
            else
                return {
                    ...state
                }
        }
        default:
            return state
    }
}

export const getChats = () => async (dispatch) => {
    let json = await require('./../chats.json')
    dispatch(setChats(json.businessChat, json.casualChat))
}

export default chatReducer