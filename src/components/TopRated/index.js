import {Component} from 'react';
import Loader from 'react-loader-spiner';
import MovieCard from '../MovieCard'
import './index.css';

class TopRatedMovies extends Component {
    state = {
        moviesList: [],
        isLoading: true,
    }

    componentDidMount() {
        this.getMoviesData()
    }

    getMoviesData = async () => {
        const {Api_key} = '6f0795df9dbff5282b090ef5419a9c7f';
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`);
        const statusCode = await response.statusCode;
        const data = await response.json();
        console.log(data);

        const formattedData = data.map(eachMovie =>({
            adult: eachMovie.adult,
            backdropPath: eachMovie.backdrop_path,
            genreIds: eachMovie.genre_ids,
            id: eachMovie.id,
            originalLanguage: eachMovie.original_language,
            originalTitle: eachMovie.original_title,
            overview: eachMovie.overview,
            popularity: eachMovie.popularity,
            posterPath: eachMovie.poster_path,
            releaseDate: eachMovie.release_date,
            title: eachMovie.title,
            video: eachMovie.video,
            voteAverage: eachMovie.vote_average,
            voteCount: eachMovie.vote_count,
        }))
        this.setState({moviesList: formattedData, isLoading: false})
    }

    render() {
        const {moviesList, isLoading} = this.state 
        return (
            <div className="bg-container">
                {isLoading ? (
                    <Loader type="TailSpin" color="#ffffff" height={50} width={50} />
                ):(
                    moviesList.map(movie => <MovieCard movieData={movie} key={movie.id} />)
                )}
            </div>
        )
    }
}

export default TopRatedMovies
