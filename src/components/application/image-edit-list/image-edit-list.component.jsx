import React, { useState } from 'react';

import './image-edit-list.styles.scss';
import ImageWZoom from '../../general/image-w-zoom/image-w-zoom.component';

const ImageEditList = ({ imgUrl, btnLabel, btnAction }) => {

  return (
    <div className='image-edit-list'>
      <ImageWZoom imageUrl={ imgUrl } />
      <div className='image-edit-list-btn' onClick={ () => btnAction() }>
        { btnLabel }
      </div>
    </div>
  )
}

export default ImageEditList