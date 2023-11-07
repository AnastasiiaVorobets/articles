import React from 'react';
import ArticleForm from '../components/ArticleForm/ArticleForm';
import SearchBar from '../components/SearchBar/SearchBar';
import ArticleList from '../components/ArticleList/ArticleList';
import Header from '../components/Header/Header';

const Home = () => {
  return (
    <main>
      <Header />
      <ArticleForm />
      <SearchBar />
      <ArticleList />
    </main>
  );
};

export default Home;
