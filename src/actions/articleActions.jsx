export const addArticle = (article) => ({
  type: 'ADD_ARTICLE',
  payload: article,
});

export const removeArticle = (articleId) => ({
  type: 'REMOVE_ARTICLE',
  payload: articleId,
});

export const pinArticle = (article) => ({
  type: 'PIN_ARTICLE',
  payload: article,
});

export const searchArticles = (query) => ({
  type: 'SEARCH_ARTICLES',
  payload: query,
});

export const receiveNewsArticles = (articles) => ({
  type: 'RECEIVE_NEWS_ARTICLES',
  payload: articles,
});
