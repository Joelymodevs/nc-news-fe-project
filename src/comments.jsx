import React, {useEffect, useState} from 'react';
import { getCommentsById } from './utils/getCommentsById';

const Comments = ({id}) => {
    const [comments, setComments] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
            <div>
                <p>Comments Loading...</p>
            </div>
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

        </div>
    )
}

export default Comments;