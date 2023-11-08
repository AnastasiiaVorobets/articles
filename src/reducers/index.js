import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import newsArticlesReducer from './newsArticlesReducer';

const rootReducer = combineReducers({
  articles: articleReducer,
  newsArticles: newsArticlesReducer,
});

export default rootReducer;
