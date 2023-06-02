import React, { useEffect, useState } from "react";
import { getCommentsById } from "./utils/utils";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


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
  if (isLoading) {
    return <p>Comments Loading...</p>;
  }
  if (!comments) {
    return <p>No Comments Here Amigo!</p>;
  }

    useEffect(() => {
        getCommentsById(id).then((data) => {
            setComments(data)
            setIsLoading(false);
        }).catch((err) => {
            console.log(err)
            setIsLoading(false)
        })
    }, [id])
    if (isLoading) {
        return (
                <p>Comments Loading...</p>
        )
    } else if (!comments) {
        return (
            <p>No Comments To Be Found Here Amigo!</p>
        )
    }

    return (
        <div>
            <h2>Comments!</h2>
                {comments.map(comment => (
                    <div key={comment.comment_id}>
                    <p><strong>{comment.author}</strong></p>
                    <p>{comment.body}</p>
                    </div>
                ))}



export default Comments;
