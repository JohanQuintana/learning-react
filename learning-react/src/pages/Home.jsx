import { useState, useEffect } from "react"
import { GetMovies } from "../services/api"
import "../css/Home.css"
import MovieCard from "../components/MovieCard"
import Loader from "../components/Loader"

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

    const handleSearch = (e) =>{
        e.preventDefault()
    }

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));

    if (loading) return <Loader/>;
    if (error) return <p>{error}</p>;
    
    return (
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input className="search-input" type="text" placeholder="Search Movie" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button className="search-button" type="submit">Search</button>
            </form>
                {error && <div className="error-message">{error}</div>}
                {loading ? <Loader/> : <div className="movies-grid">
                {filteredMovies.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
            </div>}
        </div>
    )
}