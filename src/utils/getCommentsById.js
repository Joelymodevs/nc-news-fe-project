import axios from "axios";

export const getCommentsById = (id) => {
    return axios.get(`https://nc-news-n3aj.onrender.com/api/articles/${id}/comments`)
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log(err)
    })
}