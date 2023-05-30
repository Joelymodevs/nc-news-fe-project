import axios from "axios";

export const getArticles = () => {
    return axios.get('https://nc-news-n3aj.onrender.com/api/articles').then((res) => {
        return res.data
    }).catch((err) => {
        console.log(err)
    })
}