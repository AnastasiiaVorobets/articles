import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Article from '../Article/Article';
import './ArticleList.scss';
import { removeArticle, pinArticle } from '../../actions/articleActions';

const ArticleList = () => {
  const articles = useSelector((state) => state.articles.articles);
  const pinnedArticle = useSelector((state) => state.articles.pinnedArticle);
  const dispatch = useDispatch();

  const handleRemoveArticle = (articleId) => {
    dispatch(removeArticle(articleId));
  };

  const handlePinArticle = (article) => {
    dispatch(pinArticle(article));
  };

  return (
    <ul className='list'>
      {articles.map((article) => (
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
              Pin
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
