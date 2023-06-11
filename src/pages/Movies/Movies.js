import { useState, useEffect, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  NotificationContainer,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { Input, Form, Button } from './Movies.styled';

import { Api } from '../../Api';
import { Loader } from '../../components/Loader';

const MoviesList = lazy(() => import('../../components/MoviesList'));

const api = new Api();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchParams.get('query')) {
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        api.query = searchParams.get('query');
        const data = await api.fetch('byQuery');

        if (data.length === 0) {
          setError('Enter valid query');
        } else {
          setMovies(data);
        }
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!searchParams.get('query')) {
      setError('Enter something');
      return;
    }

    setSearchParams({ query: searchParams.get('query') });
  };

  const handleChange = e => setSearchParams({ query: e.target.value });

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input onChange={handleChange} value={searchParams.get('query') || ''} />
        <Button type="submit">Search</Button>
      </Form>

      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong</p>}
      {movies.length !== 0 && <MoviesList movies={movies} />}

      <NotificationContainer />
    </>
  );
};

export default Movies;
