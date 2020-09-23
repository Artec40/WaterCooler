const ADD_MESSAGE = 'ADD_MESSAGE'
const SET_CURRENT_CHAT_TO_BUSINESS = 'SET_CURRENT_CHAT_TO_BUSINESS'
const SET_CURRENT_CHAT_TO_CASUAL = 'SET_CURRENT_CHAT_TO_CASUAL'
const GET_MESSAGES_BY_ARTICLE = 'GET_MESSAGES_BY_ARTICLE'

let initialState = {
    businessChat: [
        {
            article: 'React vs Angular',
            messages:
                [
                    {messageId: '1', author: 'Капитан Джек Воробей', message: 'Решаем стек технологий'},
                    {messageId: '2', author: 'Уилл Тёрнер', message: 'Предлагаю Реакт'},
                    {messageId: '3', author: 'Элизабет Суонн', message: 'А может вообще Vue?'},
                ]
        },
        {
            article: 'Redux vs MobX',
            messages:
                [
                    {
                        messageId: '1',
                        author: 'Уилл Тёрнер',
                        message: 'Redux, разработанный Дэном Абрамовым и Эндрю Кларком, является производным архитектуры Flux.'
                    },
                    {
                        messageId: '2',
                        author: 'Элизабет Суонн',
                        message: 'В Redux ваше состояние доступно только для чтения. Вы можете изменить состояние только с помощью явных действий. В отличие от этого, в MobX состояние включает чтение и запись.'
                    },
                ]
        }
    ],
    CasualChat: [],
    currentChat: '',
    business: 'business',
    casual: 'casual',
    currentArticle: ''
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state, ...state.businessChat,
            }
        }
        case SET_CURRENT_CHAT_TO_BUSINESS: {
            return {
                ...state, currentChat: state.business,
            }
        }
        case SET_CURRENT_CHAT_TO_CASUAL: {
            return {
                ...state, currentChat: state.casual,
            }
        }
/*        case GET_MESSAGES_BY_ARTICLE: {
            if (state.currentChat === 'business')
                if (state.businessChat.filter((chat)=>{chat.article===action.article}))
                return {
                    ...state,
                }
            if (state.currentChat === 'casual')
                return {
                    ...state, currentArticle: action.article,
                }
            else
                return state
        }*/
        default:
            return state
    }
}

export const AddMessage = (message) => ({type: ADD_MESSAGE, message})
export const SetCurrentChatToBusiness = () => ({type: SET_CURRENT_CHAT_TO_BUSINESS})
export const SetCurrentChatToCasual = () => ({type: SET_CURRENT_CHAT_TO_CASUAL})
export const GetMessages = (article) => ({type: GET_MESSAGES_BY_ARTICLE, article})

export default chatReducer