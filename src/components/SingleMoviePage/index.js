import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class MovieDetails extends Component{
    state = {movieData: {}, isLoading: true}

    componentDidMount() {
        this.getMovieData()
    }

    getMovieData = async() => {
        const Api_key = "6f0795df9dbff5282b090ef5419a9c7f"
        const {match} = this.props
        const {params} = match
        const {id} = params

        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${Api_key}&language=en-US`);
        const data = await response.json()

        const updatedData = {
            adult: adult,
            backdropPath: backdrop_path,
            belongsToCollection: {
                id: belongs_to_collection.id,
                name: belongs_to_collection.name,
                backdropPath: belongs_to_collection.backdrop_path,
                posterPath: belongs_to_collection.poster_path,
            },
            budget: budget,
            genres: genres.map(each => ({
                id: each.id,
                name: each.name,
            })),
            homepage: homepage,
            id: id,
            imdbId: imdb_id,
            originalLanguage: original_language,
            originalTitle: original_title,
            overview: overview,
            popularity: popularity,
            posterPath: poster_path,
            productionCountries: production_countries.map(each => ({
                iso31661: each.iso_3166_1,
                name: each.name,
            })),
            productionCompanies: production_companies.map(each => ({
                id: each.id,
                logoPath: each.logo_path,
                name: each.name,
                originCountry: each.origin_country,
            })),
            spokenLanguages: spoken_languages.map(each => ({
                englishName: each.english_name,
                iso6391: each.iso_639_1,
                name: each.name,
            })),
            releaseDate: release_date,
            revenue: revenue,
            runtime: runtime,
            status: status,
            tagline: tagline,
            title: title,
            video: video,
            voteAverage: vote_average,
            voteCount: vote_count,
        }
        this.setState({movieData: updatedData})
    }
    renderMovieDetails = () => {
        const {movieData} = this.state
        const {backdropPath, title, releaseDate, runtime, voteAverage, posterPath, overview} = movieData

        return (
            <div className='movie-bg-container'>
                <div>
                <img src={posterPath} className="movie-poster" alt="movie poster" />
                <div>
                    <h1>{title}</h1>
                    <p>Rating {voteAverage}</p>
                    <p>{runtime}MIN</p>
                    <p>{releaseDate}</p>
                </div>
                </div>
                <p>Overview</p>
                <p>{overview}</p>
            </div>
        )
    }
    render() {
        const {isLoading} = this.state
        return(
            <div className='movie-container'>
                {isLoading ? (
                    <Loader type="TailSpin" color="#ffffff" height={50} width={50} />
                ):(
                    this.renderMovieDetails()
                )}
            </div>
        )
    }
}

export default MovieDetails
