import { useDispatch, useSelector } from 'react-redux';
import Article from '../Article/Article';
import SearchBar from '../SearchBar/SearchBar';
import { removeArticle, pinArticle } from '../../actions/articleActions';
import './ArticleList.scss';

const ArticleList = () => {
  const articles = useSelector((state) => state.articles.articles);
  const pinnedArticle = useSelector((state) => state.articles.pinnedArticle);
  const searchQuery = useSelector((state) => state.articles.searchQuery);
  const dispatch = useDispatch();

  const handleRemoveArticle = (articleId) => {
    dispatch(removeArticle(articleId));
  };

  const handlePinArticle = (article) => {
    if (pinnedArticle && pinnedArticle.id === article.id) {
      dispatch(pinArticle(false));
    }
    else {
      dispatch(pinArticle(article));
    }
  };

  const filterArticles = (article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase());

  const sortArticles = (a, b) => (
    (pinnedArticle && pinnedArticle.id === a.id) ? -1 :
    (pinnedArticle && pinnedArticle.id === b.id) ? 1 : 0
  );

  return (
    <div>
      <SearchBar />
      <ul className='list'>
        {articles
          .filter(filterArticles)
          .sort(sortArticles)
          .map((article) => (
            <li key={article.id} className='list__item'>
              <Article article={article} />
              {pinnedArticle && pinnedArticle.id === article.id 
              ? (
                <span className='pinned'>*</span>
              )
              : null}
              <div className='button-container'>
                <button
                  className='list__button'
                  onClick={() => handleRemoveArticle(article.id)}
                >
                  Delete
                </button>
                <button
                  className='list__button'
                  onClick={() => handlePinArticle(article)}
                >
                  {pinnedArticle && pinnedArticle.id === article.id
                    ? 'Unpin'
                    : 'Pin'}
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ArticleList;
