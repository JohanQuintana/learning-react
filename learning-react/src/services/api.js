import axios from "axios";

const API_URL = "https://devsapihub.com/api-movies";

export const GetMovies = async () => {
    const res = await axios.get(`${API_URL}`)
    return res.data
};

export const SearchMovies = async (query) => {
    const res = await axios.get(`${API_URL}&query=${encodeURIComponent(query)}`)
    return res.data
}