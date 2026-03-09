import axios from "axios";

const API_URL = "https://devsapihub.com/api-movies";

export const GetMovies = async () => {
    const res = await axios.get(`${API_URL}`)
    return res.data
};