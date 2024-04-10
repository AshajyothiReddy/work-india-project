import './index.css'

const MovieCard = props => {
    const {movieData} = props
    const {movieImage, movie_title, movieRating} = movieData

    return (
        <Link to={`/movies/${id}`}>
        <div className='movie-card'>
            <img src={movieImage} alt="movie image" className='movie-image'/>
            <p className='movie-title'>{movie_title}</p>
            <p className='movie-rating'>Rating {movieRating}</p>
        </div>
        </Link>
    )
}

export default MovieCard
