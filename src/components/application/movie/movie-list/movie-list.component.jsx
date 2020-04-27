import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './movie-list.styles.scss';

const MovieList = ({ movies }) => {
  const { path } = useRouteMatch();

  return (
    <div>
      {
        movies.map(m => <Link to={`${path}/${m.id}/edit`} key={m.id}>{m.title}</Link>)
      }
    </div>
  )
}

export default MovieList;