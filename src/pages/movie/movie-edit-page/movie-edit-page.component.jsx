import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './movie-edit-page.component.scss';
import MovieEdit from '../../../components/application/movie/movie-edit/movie-edit.component';
import { selectMovieDetails } from '../../../redux/movie/movie.selectors';
import { fetchMovieStart } from '../../../redux/movie/movie.actions';


const MovieEditPage = ({ fetchMovieStart, movieDetails }) => { 
  const { params: { id }} = useRouteMatch();

  useEffect(() => {
    fetchMovieStart(id);
  }, [fetchMovieStart, id])

  return (
    <div className='movie-edit-page'>
      { 
        movieDetails &&
        <MovieEdit movie={ movieDetails } />
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  movieDetails: selectMovieDetails
});

const mapDispatchToProps = dispatch => ({
  fetchMovieStart: id => dispatch(fetchMovieStart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieEditPage);