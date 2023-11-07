import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { receiveNewsArticles } from '../../actions/articleActions';
import Article from '../../components/Article/Article';
import './NewsArticleList.scss';

const NewsArticleList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState(10);

  const dispatch = useDispatch();

  const loadMoreArticles = () => {
    if (displayedArticles + 5 <= articles.length) {
      setDisplayedArticles(displayedArticles + 3);
    } else {
      setDisplayedArticles(articles.length);
    }
  };

  const fetchNewsArticles = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=42ba9f1870944cbeae875392f7b8887d');
      const data = await response.json();

      setArticles(data.articles);
      dispatch(receiveNewsArticles(data.articles));
    } catch (error) {
      console.error('Error fetching news articles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsArticles();
  }, [dispatch]);

  return (
    <div>
      <h2 className="title">News Articles</h2>

      <ul className="articles">
        {articles.slice(0, displayedArticles).map((article, index) => (
          <li key={index} className="article">
            <Article article={article} />
          </li>
        ))}
      </ul>

      {articles.length > displayedArticles && (
        <button onClick={loadMoreArticles} className="load__button">
          Load More
        </button>
      )}
    </div>
  );
};

export default NewsArticleList;
