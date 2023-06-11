import PropTypes from 'prop-types';
import { MovieInfoEl } from './MovieInfo.styled';

const MovieInfo = ({ year, title, overview, genres, score }) => {
  return (
    <MovieInfoEl>
      <h2>
        {title} ({year})
      </h2>
      <p>User Score: {score}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
    </MovieInfoEl>
  );
};

MovieInfo.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  score: PropTypes.number.isRequired,
};

export default MovieInfo;
