import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Article from '../Article/Article';
import './ArticleList.scss';
import { removeArticle, pinArticle } from '../../actions/articleActions';
import SearchBar from '../SearchBar/SearchBar';

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
      dispatch(pinArticle(null));
    } else {
      dispatch(pinArticle(article));
    }
  };

  return (
    <div>
      <SearchBar />
      <ul className='list'>
        {articles
          .filter((article) =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((article) => (
            <li key={article.id} className='list__item'>
              <Article article={article} />
              {pinnedArticle && pinnedArticle.id === article.id ? (
                <span className='pinned'>Pinned</span>
              ) : null}
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
