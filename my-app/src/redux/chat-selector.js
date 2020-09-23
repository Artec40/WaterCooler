export const getArticles = (state, chatType) => {
    let articles = []
    if (chatType === state.chat.chatType.business)
        articles = state.businessChat.map((c) => c.article)
    if (chatType === state.chat.chatType.casual)
        articles = state.casualChat.map((c) => c.article)
    return articles
}

export const getMessages = (state, chatType) => {
    let messages = []
    if (chatType === state.chat.chatType.business)
        messages = state.businessChat.map((c) => c.article)
    if (chatType === state.chat.chatType.casual)
        messages = state.casualChat.map((c) => c.article)
    return messages
}