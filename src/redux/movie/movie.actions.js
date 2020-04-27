import MovieActionTypes from './movie.types';

export const addMovieStart = movie => ({
  type: MovieActionTypes.ADD_MOVIE_START,
  payload: movie
});

export const addMovieSuccess = () => ({
  type: MovieActionTypes.ADD_MOVIE_SUCCESS
});

export const addMovieFailure = errors => ({
  type: MovieActionTypes.ADD_MOVIE_FAILURE,
  payload: errors
});

export const fetchMovieStart = id => ({
  type: MovieActionTypes.FETCH_MOVIE_START,
  payload: id
});

export const fetchMovieSuccess = movie => ({
  type: MovieActionTypes.FETCH_MOVIE_SUCCESS,
  payload: movie
});

export const fetchMovieFailure = errors => ({
  type: MovieActionTypes.FETCH_MOVIE_FAILURE,
  payload: errors
});

export const fetchMoviesStart = () => ({
  type: MovieActionTypes.FETCH_MOVIES_START
});

export const fetchMoviesSuccess = movies => ({
  type: MovieActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies
});

export const fetchMoviesFailure = errors => ({
  type: MovieActionTypes.FETCH_MOVIES_FAILURE,
  payload: errors
});