import { createSelector } from 'reselect';

const selectMovie = state => state.movie;

export const selectMovies = createSelector(
  [selectMovie],
  movie => movie.movies
);

export const selectMovieDetails = createSelector(
  [selectMovie],
  movie => movie.movieDetails
);
