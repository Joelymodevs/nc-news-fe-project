import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Article = () => {
    const [articles, setArticles] = useState([]);


    useEffect(() => {
        axios.get('https://nc-news-n3aj.onrender.com/api/articles').then((result) => {
        setArticles(result.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <div className='articles'>
            {articles.map(article => (
                <div key={article.article_id} className='article-card'>
                    <img src={article.article_img_url} alt="article-image" className='card-img'/>
                    <div className='card-main'>
                    <h2>{article.title}</h2>
                    <p>{article.author}</p>
                    <p>Topic: {article.topic}</p>
                </div>

                </div>
            ))}
        </div>
    )
}

export default Article