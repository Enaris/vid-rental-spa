import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './movie-edit-page.component.scss';
import MovieEdit from '../../../components/application/movie/movie-edit/movie-edit.component';
import { selectMovieDetails, selectMovieDetailsLoading } from '../../../redux/movie/movie.selectors';
import { fetchMovieStart } from '../../../redux/movie/movie.actions';


const MovieEditPage = ({ fetchMovieStart, movieDetails, loading }) => { 
  const { params: { id }} = useRouteMatch();

  useEffect(() => {
    fetchMovieStart(id);
  }, [fetchMovieStart, id])

  return (
    <div className='movie-edit-page'>
      { 
        !loading && movieDetails 
        ? <MovieEdit movie={ movieDetails } />
        : <div> w8 im loading </div>
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  movieDetails: selectMovieDetails, 
  loading: selectMovieDetailsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchMovieStart: id => dispatch(fetchMovieStart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieEditPage);