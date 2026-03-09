import "../css/MovieCard.css"

export default function MovieCard({movie}) {

    function OnFavoriteClick(){
        alert('hice un click')
    }

    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={movie.url} alt={movie.title}/>
                <div className='movie-overlay'>
                    <button className='favorite-btn' onClick={OnFavoriteClick}>▓</button>
                </div>
            <div className='movie-info'>
                <h3>{movie.title}</h3>
                <p>{movie.realease_date}</p>
            </div>
            </div>
        </div>
    )
};