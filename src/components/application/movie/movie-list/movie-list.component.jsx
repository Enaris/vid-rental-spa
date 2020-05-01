import React from 'react';

import './movie-list.styles.scss';
import MovieForList from '../movie-for-list/movie-for-list.component';

const MovieList = ({ movies }) => {

  return (
    <div>
      {
        movies.map(m => <MovieForList key={ movies.id } movie={ m } />)
      }
    </div>
  )
}

export default MovieList;