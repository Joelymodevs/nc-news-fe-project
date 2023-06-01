import React, { useEffect, useState } from "react";
import { getArticles } from "./utils/getAllArticles";
import { getArticleById } from "./utils/getArticleById";
import { useParams } from "react-router-dom";
import "./styles/ArticlePage.css";
import Comments from "./comments";
import Vote from "./Votes";

const FullArticle = () => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  if (isLoading || !article) {
    return <p>Loading...</p>;
  }

  return (
    <div className="article-container">
      <h1 className="title">{article.title}</h1>
      <p className="topic">Topic :{article.topic}</p>
      <p className="author">Author: {article.author}</p>
      <Vote article={article}/>
    
      <img
        src={article.article_img_url}
        alt={article.title}
        className="article-img"
      />
      <p className="body">{article.body}</p>
      <Comments id={article.article_id} />
    </div>
  );
};

export default FullArticle;
