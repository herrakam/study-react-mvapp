import React from "react"
import proptypes from "prop-types"

function Movie({id, year, title, summary, poster}) {
    return <h4>{title}</h4>

}

Movie.propTypes = {
    id:proptypes.number.isRequired,
    title:proptypes.string.isRequired,
    summary:proptypes.string.isRequired,
    poster:proptypes.string.isRequired,
    year:proptypes.number.isRequired
}

export default Movie