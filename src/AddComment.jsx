import React, { useState } from "react";

const AddComment = ({ id, postComment }) => {
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(body, id);
    setBody("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={body}
        onChange={(event) => setBody(event.target.value)}
        placeholder="Type Here..."
        required
      />
      <button type='submit'>Post Your Comment</button>
    </form>
  );
};

export default AddComment;