const initialState = {
  articles: [],
  pinnedArticle: null,
  searchQuery: '',
  searchedArticles: [],
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };

    case 'REMOVE_ARTICLE':
      return {
        ...state,
        articles: state.articles.filter((article) => article.id !== action.payload),
      };

    case 'PIN_ARTICLE':
      return {
        ...state,
        pinnedArticle: action.payload,
      };

      case 'SEARCH_ARTICLES':
        if (action.payload) {
          return {
            ...state,
            articles: state.articles.filter((article) => {
              return article.title.toLowerCase().includes(action.payload.toLowerCase());
            }),
          };
        }
        else {
          return initialState;
      }

    default:
      return state;
  }
};

export default articleReducer;
