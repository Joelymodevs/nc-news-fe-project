
import React, { useEffect, useState } from "react";
import { getArticles } from "./utils/utils";
import { Link } from "react-router-dom";
import "./styles/articles.css";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <articles>
      {articles.map((article) => (
        <Link to={`/articles/${article.article_id}`} key={article.title}>
          <div key={article.article_id} className="article-card">
            <img
              src={article.article_img_url}
              alt="article-image"
              className="card-img"
            />
            <div className="card-main">
              <h2>{article.title}</h2>
              <p>{article.author}</p>
              <p></p>
              <p>Topic: {article.topic}</p>
            </div>
          </div>
        </Link>
      ))}
    </articles>
  );
};

export default Article;
