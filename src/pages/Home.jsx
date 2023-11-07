import React from 'react';
import ArticleForm from '../components/ArticleForm/ArticleForm';
import ArticleList from '../components/ArticleList/ArticleList';
import Header from '../components/Header/Header';

const Home = () => {
  return (
    <main>
      <Header />
      <ArticleForm />
      <ArticleList />
    </main>
  );
};

export default Home;
