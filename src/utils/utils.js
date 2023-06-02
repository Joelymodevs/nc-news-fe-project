import axios from "axios";

export const getArticleById = (id) => {
  return axios
    .get(`https://nc-news-n3aj.onrender.com/api/articles/${id}`)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCommentsById = (id) => {
  return axios
    .get(`https://nc-news-n3aj.onrender.com/api/articles/${id}/comments`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getArticles = () => {
  return axios
    .get("https://nc-news-n3aj.onrender.com/api/articles")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postComment = (id, body, username) => {
  return axios
    .post(`https://nc-news-n3aj.onrender.com/api/articles/${id}/comments`, {
      username,
      body,
    })
    .then((response) => {
        return response.data
    }).catch((err) => {
        console.log(err)
    })
};
