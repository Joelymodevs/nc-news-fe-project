import axios from 'axios'

export const getArticleById = (id) => {
    return axios.get(`https://nc-news-n3aj.onrender.com/api/articles/${id}`).then((result) => {
        return result.data
    }).catch((err) => {
        console.log(err)
    })
}