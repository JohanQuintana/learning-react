import "../css/MovieCard.css"
import { useState } from "react"

export default function MovieCard({movie}) {
    const [FavButton, setFavButton] = useState([]);

    function OnFavoriteClick(){
        alert("XD")
    }

    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={movie.image_url} alt={movie.title}/>
                <div className='movie-overlay'>
                    <button className='favorite-btn' onClick={OnFavoriteClick}>▓</button>
                </div>
            </div>
                <div className='movie-info'>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                </div>
        </div>
    )
};