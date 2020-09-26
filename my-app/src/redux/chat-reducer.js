const ADD_ARTICLE = 'ADD_ARTICLE'
const ADD_MESSAGE = 'ADD_MESSAGE'
const SET_CURRENT_CHAT_TYPE = 'SET_CURRENT_CHAT_TYPE'
const SET_CURRENT_ARTICLE = 'SET_CURRENT_ARTICLE'
const SET_CURRENT_MESSAGES_BY_ARTICLE = 'SET_CURRENT_MESSAGES_BY_ARTICLE'
const CLEAN_CURRENT_CHAT_DATA = 'CLEAN_CURRENT_CHAT_DATA'


let initialState = {
    businessChat: [
        {
            article: 'React vs Angular',
            messages:
                [
                    {author: 'Капитан Джек Воробей', message: 'Решаем стек технологий'},
                    {author: 'Уилл Тёрнер', message: 'Предлагаю Реакт'},
                    {author: 'Элизабет Суонн', message: 'А может вообще Vue?'},
                ]
        },
        {
            article: 'Redux vs MobX',
            messages:
                [
                    {
                        author: 'Уилл Тёрнер',
                        message: 'Redux, разработанный Дэном Абрамовым и Эндрю Кларком, является производным архитектуры Flux.'
                    },
                    {
                        author: 'Элизабет Суонн',
                        message: 'В Redux ваше состояние доступно только для чтения. Вы можете изменить состояние только с помощью явных действий. В отличие от этого, в MobX состояние включает чтение и запись.'
                    },
                ]
        }
    ],
    casualChat: [
        {
            article: 'Новый год',
            messages:
                [
                    {author: 'Капитан Джек Воробей', message: 'Где будем праздновать?'},
                    {author: 'Уилл Тёрнер', message: 'В пиратской бухте'},
                    {author: 'Элизабет Суонн', message: 'На корабле?'},
                ]
        },
        {
            article: 'Пиратский кодекс',
            messages:
                [
                    {
                        author: 'Уилл Тёрнер',
                        message: 'Пиратский кодекс - свод указаний, а не жёсткие законы'
                    },
                    {
                        author: 'Элизабет Суонн',
                        message: 'Пренебрежение кодексом карается смертью!'
                    },
                ]
        }
    ],
    chatType: {
        business: 'business',
        casual: 'casual'
    },
    currentChatType: '',
    currentArticle: '',
    currentMessages: []
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {

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
        default:
            return state
    }
}



export const setCurrentChatType = (chatType) => ({type: SET_CURRENT_CHAT_TYPE, chatType})
export const setCurrentArticle = (article) => ({type: SET_CURRENT_ARTICLE, article})
export const setCurrentMessagesByArticle = (chatType, article) => ({
    type: SET_CURRENT_MESSAGES_BY_ARTICLE, chatType, article
})
export const cleanCurrentChatData = () => ({type: CLEAN_CURRENT_CHAT_DATA})


export default chatReducer