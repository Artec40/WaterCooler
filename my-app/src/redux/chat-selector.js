export const getArticles = (state, chatType) => {
    let articles = []
    if (chatType === state.chat.chatType.business)
        articles = state.chat.businessChat.map(c => c.article)
    if (chatType === state.chat.chatType.casual)
        articles = state.chat.casualChat.map(c => c.article)
    return articles
}

