import React from 'react';

import './image-for-edit-list.styles.scss';
import ImageWZoom from '../../general/image-w-zoom/image-w-zoom.component';

const ImageForEditList = ({ imgUrl, btnLabel, btnAction, label }) => {

  return (
    <div className='image-edit-list'>
      <ImageWZoom imageUrl={ imgUrl } />
      {
        label && <div className='image-edit-list-label'>{ label }</div> 
      }
      <div className='image-edit-list-btn' onClick={ () => btnAction() }>
        { btnLabel }
      </div>
    </div>
  )
}

export default ImageForEditList