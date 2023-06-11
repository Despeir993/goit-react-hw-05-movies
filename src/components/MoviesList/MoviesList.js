import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })
  ).isRequired,
};

export default MoviesList;
