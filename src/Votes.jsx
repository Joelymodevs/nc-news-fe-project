import React, { useEffect, useState } from "react";
import axios from "axios";

const Vote = ({ article }) => {
    const currVotes = article.votes
  const [votes, setVotes] = useState(currVotes);
  const [isVoted, setIsVoted] = useState(false);

  const handleUpVote = () => {
    if (isVoted) {
      return;
    }
    const id = article.article_id
    axios
      .patch(`https://nc-news-n3aj.onrender.com/api/articles/${id}`, {
        "inc_votes": 1
      })
      .then((response) => {
        console.log(response.data)
        setVotes(votes + 1 );
        setIsVoted(true)
      }).catch((err) => {
        console.log(err)
      })
  };

  const handleDownVote = () => {
    if (isVoted) {
        return;
    }

    const id = article.article_id;
    axios
      .patch(`https://nc-news-n3aj.onrender.com/api/articles/${id}`, {
        "inc_votes": -1
      })
      .then((response) => {
        console.log(response.data)
        setVotes(votes - 1 );
        setIsVoted(true)
      }).catch((err) => {
        console.log(err)
      })
    
  }
  
  return (
      <div className="vote-container">
        <p>likes: {votes}</p>
          <button onClick={handleUpVote}>Upvote this article</button>
          <button onClick={handleDownVote}>Downvote this article</button>
          
      </div>
  )
};

export default Vote