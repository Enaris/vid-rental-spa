import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './employee-movies-page.styles.scss';
import { fetchMoviesStart } from '../../../redux/movie/movie.actions';
import { selectMovies } from '../../../redux/movie/movie.selectors';
import MovieList from '../../../components/application/movie/movie-list/movie-list.component';

const MoviesPage = ({ movies, fetchMoviesStart }) => {
  useEffect(() => {
    fetchMoviesStart();    
  }, [fetchMoviesStart])
  
  return (
    <div>
      {
        !movies 
        ? <div> Loading... </div>
        : movies && !movies.length
        ? <div> There are no movies yet </div>
        : <MovieList movies={ movies } />
      }
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchMoviesStart: () => dispatch(fetchMoviesStart())
});

const mapStateToProps = createStructuredSelector({
  movies: selectMovies
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);