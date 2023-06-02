import React, { useEffect, useState } from "react";
import { getCommentsById, postComment } from "./utils/utils";
import AddComment from "./AddComment";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPosting, setIsPosting] = useState(false)

  const fetchComments = () => {
    getCommentsById(id)
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  
  }
  
    const handleComment = (body) => {
      setIsPosting(true)
      const author = 'grumpy19'
      postComment(id, body, author).then((newCom) => {
          setComments((currentComments) => [newCom, ...currentComments]);
          setIsPosting(false);
          fetchComments()
      }).catch((err) => {
          console.log(err)
          setIsPosting(false)
      })
    }
    useEffect(() => {
      fetchComments()
    }, [id])
  
  if (isLoading) {
    return <p>Comments Loading...</p>;
  }
  if (!comments) {
    return <p>No Comments Here Amigo!</p>;
  }


  return (
    <div>
      <h2>Comments!</h2>
      {isPosting ? <p>Posting...</p> : null}
      <AddComment id={id} postComment={handleComment}/>
      {comments.map((comment) => (
        <div key={comment.comment_id}>
          <p>
            <strong>{comment.author}</strong>
          </p>
          <p>{comment.body}</p>
        </div>
      ))}
      
    </div>
  );
};

export default Comments;
