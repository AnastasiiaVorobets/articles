const initialState = {
  articles: [],
};

const newsArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_NEWS_ARTICLES':
      return {
        ...state,
        articles: action.payload,
      };

    default:
      return state;
  }
};

export default newsArticlesReducer;
