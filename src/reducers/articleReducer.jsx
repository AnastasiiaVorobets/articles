const initialState = {
  articles: [],
  pinnedArticle: null,
  searchQuery: '',
  nextArticleId: 1,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      const newArticle = {
        ...action.payload,
        id: state.nextArticleId,
      };

      return {
        ...state,
        articles: [...state.articles, newArticle],
        nextArticleId: state.nextArticleId + 1,
      };

    case 'REMOVE_ARTICLE':
      return {
        ...state,
        articles: state.articles.filter((article) => article.id !== action.payload),
      };

    case 'PIN_ARTICLE':
      const updatedArticles = state.articles.map((article) => {
        if (article.id === action.payload.id) {
          return { ...article, pinned: true };
        }
        else {
          return { ...article, pinned: false };
        }
      });

      return {
        ...state,
        articles: updatedArticles,
        pinnedArticle: action.payload,
      };

    case 'SEARCH_ARTICLES':
      return {
        ...state,
        searchQuery: action.payload,
      };

    default:
      return state;
  }
};

export default articleReducer;
