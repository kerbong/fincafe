import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, title, year, coverImg, rating, summary}) {
    return (
    <div key={id}>
    <h3>
        <Link to={`/movie/${id}`}>{title}({year})</Link>
    </h3>
    <img src={coverImg} alt={id}/>
    <p>평점 : {rating}</p>
    <p>줄거리 : {summary}</p>
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,

}

export default Movie;