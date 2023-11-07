import React from 'react';
import './Article.scss';

const Article = ({ article }) => {
  return (
    <div className="article">
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <p>By {article.author}</p>
      <img src={article.urlToImage} alt={article.title} className='article__image'/>
    </div>
  );
};

export default Article;
