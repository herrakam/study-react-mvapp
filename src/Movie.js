import React from "react"
import proptypes from "prop-types"
import "./css/Movie.css"

function Movie({ year, title, summary, poster }) {
    return <div class="movie">
        <img src={poster} alt ={title}></img>
        <div class="movie_data">
            <h4 class="movie_title" >{title}</h4>
            <h5 class="movie_year">{year}</h5>
            <p class="movie_summary">{summary}</p>
        </div>
    </div>

}

Movie.propTypes = {
    id: proptypes.number.isRequired,
    title: proptypes.string.isRequired,
    summary: proptypes.string.isRequired,
    poster: proptypes.string.isRequired,
    year: proptypes.number.isRequired
}

export default Movie