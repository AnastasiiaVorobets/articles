import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { receiveNewsArticles } from '../../actions/articleActions';
import Article from '../../components/Article/Article';
import './NewsArticleList.scss';

const NewsArticleList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchNewsArticles = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=42ba9f1870944cbeae875392f7b8887d&page=${page}`);
        const data = await response.json();

        const newArticles = data.articles
          .filter((article) => !articles.some((a) => a.title === article.title));
        setArticles([...articles, ...newArticles]);

        dispatch(receiveNewsArticles(articles));
      }

      catch (error) {
        console.error('Error fetching news articles:', error);
      }

      finally {
        setIsLoading(false);
      }
    };

    fetchNewsArticles();
  }, [dispatch, page, articles]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h2 className='title'>News Articles</h2>
      <button
        onClick={navigateToHome}
        className='back__button'
      >
        Back
      </button>

      {isLoading ? (
        <p>Loading news articles...</p>
      ) : (
        <ul className='articles'>
          {articles.map((article, index) => (
            <li key={index} className='article'>
              <Article article={article} />
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleLoadMore}
        className='load__button'
      >
        Load More
      </button>
    </div>
  );
};

export default NewsArticleList;
