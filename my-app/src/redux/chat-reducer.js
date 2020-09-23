const ADD_ARTICLE = 'ADD_ARTICLE'
const ADD_MESSAGE = 'ADD_MESSAGE'
const SET_CURRENT_CHAT_TYPE = 'SET_CURRENT_CHAT_TYPE'

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
    currentChatType: ''
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE: {
            if (action.chatType === state.chatType.business)
                return {
                    ...state,
                    ...state.businessChat.push({articles: action.article, messages: []}),
                }
            if (action.chatType === state.chatType.casual)
                return {
                    ...state,
                    ...state.casualChat.push({articles: action.article, messages: []}),
                }
            else
                return {
                    ...state
                }
        }
        case ADD_MESSAGE: {
            if (action.chatType === state.chatType.business) {
                let index = state.businessChat.indexOf(action.article)
                return {
                    ...state,
                    ...state.businessChat,
                    ...state.businessChat[index],
                    ...state.businessChat[index].messages.push({author: action.author, message: action.message})
                }
            }
            if (action.chatType === state.chatType.casual) {
                let index = state.casualChat.indexOf(action.article)
                return {
                    ...state,
                    ...state.casualChat,
                    ...state.casualChat[index],
                    ...state.casualChat[index].messages.push({author: action.author, message: action.message})
                }
            }
            else
                return {
                    ...state
                }
        }
        case SET_CURRENT_CHAT_TYPE: {
            return {
                ...state, currentChatType: action.chatType
            }
        }
        default:
            return state
    }
}

export const AddArticle = (chatType, article) => ({type: ADD_ARTICLE, chatType, article})
export const AddMessage = (chatType, author, message) => ({type: ADD_MESSAGE, chatType, author, message})
export const setCurrentChatType = (chatType) => ({type: SET_CURRENT_CHAT_TYPE, chatType})


export default chatReducer