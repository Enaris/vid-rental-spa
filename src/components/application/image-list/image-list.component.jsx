import React from 'react';

import './image-list.styles.scss';
import ImageForEditList from '../image-for-edit-list/image-for-edit-list.component';

const ImageList = ({ images, label, btnLabel, btnAction }) => {

  return (
    <div className='image-list'>
      {
        label &&
        <div className='image-list-label'>{ label }</div>
      }

      <div className='image-list-images'>
      {
        images.map(i => 
        <ImageForEditList 
          key={ i.keyVal }
          imgUrl={ i.url } 
          btnLabel={ btnLabel } 
          btnAction={ () => btnAction(i.keyVal) }
        />)
      }
      </div>
    </div>
  )
}

export default ImageList