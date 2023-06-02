import React, { useEffect, useState } from "react";
import axios from "axios";

const Vote = ({ article }) => {
  const [votes, setVotes] = useState(article.votes);
  const [isVoted, setIsVoted] = useState(false);
  const [error, setError] = useState(null)
  

  const handleUpVote = () => {
    if (isVoted) {
      return;
    }
    setVotes(votes + 1)

    const id = article.article_id
    axios
      .patch(`https://nc-news-n3aj.onrender.com/api/articles/${id}`, {
        "inc_votes": 1
      })
      .then((response) => {
        setIsVoted(true)
      }).catch((err) => {
        console.log(err)
        setError(err.message)
      })
  };

  const handleDownVote = () => {
    if (isVoted) {
        return;
    }
    setVotes(votes - 1)
    const id = article.article_id;
    axios
      .patch(`https://nc-news-n3aj.onrender.com/api/articles/${id}`, {
        "inc_votes": -1
      })
      .then((response) => {
        setIsVoted(true)
      }).catch((err) => {
        console.log(err)
        setError(err.message)
      })
    
  }
  
  return (
      <div className="vote-container">
        <p>likes: {votes}</p>
          <button onClick={handleUpVote}>Upvote this article</button>
          <button onClick={handleDownVote}>Downvote this article</button>
          {error && <p>{error}</p>}
          
      </div>
  )
};

export default Vote