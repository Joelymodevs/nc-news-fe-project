
import React, { useEffect, useState } from "react";
import { getArticles } from "./utils/getAllArticles";
import { Link } from 'react-router-dom'
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
    return (
        <p>Loading...</p>
    );
  }
  return (
    <articles>
      {articles.map((article) => (
        <Link to={`/articles/${article.article_id}`} key={article.title}>
        <div key={article.article_id} className="article-card">
          <img
            src={article.article_img_url}
            alt={article.title}
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

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './articles.css'
import { getArticles } from './utils/getAllArticles';

const Article = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getArticles().then((data) => {
            setArticles(data);
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    return (
        <div className='articles'>
            {articles.map(article => (
                <div key={article.article_id} className='article-card'>
                    <img src={article.article_img_url} alt="article-image" className='card-img'/>
                    <div className='card-main'>
                    <h2>{article.title}</h2>
                    <p>{article.author}</p>
                    <p></p>
                    <p>Topic: {article.topic}</p>
                </div>

                </div>
            ))}
        </div>
    )
}

export default Article

