import React from 'react';

import './movie-image-list.styles.scss';
import ImageWZoom from '../../general/image-w-zoom/image-w-zoom.component';

const MovieImageList = ({ images, label }) => {
  return (
    <div className='movie-image-list-container'>
      {
        label &&
        <div className='movie-image-label'>
          { label }
        </div>
      }
      <div className='movie-image-list'>
      {
        images.map(i => 
          <div key={ i.key } className='movie-image-item'>
            <ImageWZoom 
              imageUrl={ i.url }
            />
          </div>
        )
      }
      </div>
    </div>
  )
}

export default MovieImageList