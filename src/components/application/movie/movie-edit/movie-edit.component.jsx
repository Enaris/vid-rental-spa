import React from 'react';

import './movie-edit.styles.scss';
import DropzoneWithPreview from '../../dropzone/dropzone-w-preview/dropzone-w-preview.component';

const MovieEdit = ({ movie }) => {
  const { title, images, description, director } = movie;
  const thumbnail = images.find(i => i.type === 'thumbnail');
  const thumbnailUrl = thumbnail ? thumbnail.url : '';
  return (
    <div className='movie-edit'>
      <div className='movie-cover'>
        <DropzoneWithPreview initImage={ thumbnailUrl }/>
      </div>
      <div className='movie-details'>
        <h2 className='movie-title'>{ title }</h2>
        <h3 className='movie-director'>Director: { director }</h3>
        <div className='movie-desc'>
          { description }
        </div>
      </div>
    </div>
  )
}

export default MovieEdit;