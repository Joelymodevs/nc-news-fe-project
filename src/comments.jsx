import React, { useEffect, useState } from "react";
import { getCommentsById, postComment } from "./utils/utils";
import AddComment from "./AddComment";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPosting, setIsPosting] = useState(false)

  useEffect(() => {
    getCommentsById(id)
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [id]);

  const handleComment = (body) => {
    setIsPosting(true)
    const username = 'grumpy19'
    postComment(id, body, username).then((newCom) => {
        setComments((newComment) => [newComment, ...comments]);
        setIsPosting(false);
    }).catch((err) => {
        console.log(err)
        setIsPosting(false)
    })
  }
  if (isLoading) {
    return <p>Comments Loading...</p>;
  }
  if (!comments) {
    return <p>No Comments Here Amigo!</p>;
  }


  return (
    <div>
      <h2>Comments!</h2>

      {comments.map((comment) => (
        <div key={comment.comment_id}>
          <p>
            <strong>{comment.author}</strong>
          </p>
          <p>{comment.body}</p>
        </div>
      ))}
      <AddComment postComment={handleComment}/>
    </div>
  );
};

export default Comments;
