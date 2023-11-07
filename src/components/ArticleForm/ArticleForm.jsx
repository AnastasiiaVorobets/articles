import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle } from '../../actions/articleActions';
import './ArticleForm.scss';

const UserArticleForm = () => {
  const [newArticle, setNewArticle] = useState({
    image: '',
    author: '',
    description: '',
    title: '',
  });

  const dispatch = useDispatch();

  const handleAddArticle = () => {
    if (newArticle.image && newArticle.author && newArticle.description && newArticle.title) {
      dispatch(addArticle(newArticle));
      setNewArticle({
        image: '',
        author: '',
        description: '',
        title: '',
      });
    }
  };

  return (
    <div>
      <h2 className="title">Create an Article</h2>
      <div className="user-article-form">

      <div className="input-container">
      <input
          className="input title-input"
          type="text"
          placeholder="Title"
          value={newArticle.title}
          required
          onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
        />

        <input
          className="input description-input"
          type="text"
          placeholder="Description"
          value={newArticle.description}
          required
          onChange={(e) => setNewArticle({ ...newArticle, description: e.target.value })}
        />

        <input
          className="input author-input"
          type="text"
          placeholder="Author"
          value={newArticle.author}
          required
          onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })}
        />

        <input
          className="input image-input"
          type="text"
          placeholder="Image URL"
          value={newArticle.image}
          required
          onChange={(e) => setNewArticle({ ...newArticle, image: e.target.value })}
        />
      </div>
      <button
        className="button"
        onClick={handleAddArticle}
      >
        Add Article
      </button>
    </div>
    </div>
  );
};

export default UserArticleForm;
