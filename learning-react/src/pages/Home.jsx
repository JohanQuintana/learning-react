import { useState, useEffect } from "react"
import axios from 'axios'
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { GetMovies } from "../services/api"

export default function Home(){
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const showMovies = await GetMovies()
                setMovies(showMovies)
            } catch (error) {
                console.log("Error al cargar los datos" + error)
                setError("Error al cargar los datos" + error)
            }
            finally {
                setLoading(false)
            }
        }

        loadMovies()
    },[])

    console.log(movies);

    const handleSearch = (e) =>{
        e.preventDefault()
        alert(searchQuery)
    }
    
    return (
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input className="search-input" type="text" placeholder="Search Movie" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
            </div>
        </div>
    )
}