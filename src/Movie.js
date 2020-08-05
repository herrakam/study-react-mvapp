import React from "react"
import proptypes from "prop-types"
import "./css/Movie.css"

function Movie({ year, title, summary, poster, genres }) {
    return <div className="movie">
        <img src={poster} alt={title}></img>
        <div className="movie_data">
            <h4 className="movie_title" >{title}</h4>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_genre">
                {genres.map((genre, index) => (
                <li key ={index} className="genre">{genre}</li>
            ))}
            </ul>
            <p className="movie_summary">{summary}</p>

        </div>
    </div>

}

Movie.propTypes = {
    id: proptypes.number.isRequired,
    title: proptypes.string.isRequired,
    summary: proptypes.string.isRequired,
    poster: proptypes.string.isRequired,
    year: proptypes.number.isRequired,
    genres: proptypes.arrayOf(proptypes.string).isRequired
}

export default Movie