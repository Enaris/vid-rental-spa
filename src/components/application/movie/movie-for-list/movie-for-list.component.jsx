import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './movie-for-list.styles.scss';
import staticUrls, { getImageSrc } from '../../../../redux/api/api.urls';

const MovieForList = ({ movie: { id, title, thumbnailUrl }}) => {
  const { path } = useRouteMatch();

  const thumbnail = thumbnailUrl ? getImageSrc(thumbnailUrl) : staticUrls.noCoverImageUrl;
  return (
    <div className='movie-for-list w100'>
      <div className='movie-for-list-thumbnail'>
        <img className='thumbnail-img' src={ thumbnail } alt={ title }/>
      </div>
      <div className='movie-for-list-text w100'>
        <div className='movie-for-list-title'>
          <Link className='movie-for-list-title' to={`${path}/${id}/edit`}>{title}</Link>
        </div>
      </div>
    </div>
  )
}

export default MovieForList;