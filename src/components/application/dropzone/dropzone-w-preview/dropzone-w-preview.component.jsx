import React, { useState, useEffect } from 'react';

import './dropzone-w-preview.styles.scss';

import VidDropzone from '../../../forms/vid-dropzone/vid-dropzone.component';
import ImageWZoom from '../../../general/image-w-zoom/image-w-zoom.component';


const DropzoneWithPreview = ({ maxSize, label, initImage, onRemove, handleDrop, errorsInside }) => {
  const [image, setImage] = useState(null); 

  useEffect(() => {
    if (initImage)
      console.log(initImage);
      setImage(initImage);
  }, [initImage])

  const onDrop = file => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setImage(fileReader.result)
    };
    fileReader.readAsDataURL(file);
    if (handleDrop) {
      handleDrop(file);
    }
  }

  const onXClick = () => {
    setImage(null);
    if (onRemove)
      onRemove();
  }

  return (
    <div className='dropzone-w-preview'>
      {
        image ?
        <div className='preview-container'>
          <div className='img-preview-x-btn' onClick={() => onXClick()}>X</div>
          <ImageWZoom imageUrl={ image } />
        </div>
        :
        <VidDropzone 
          label={ label }
          maxSize={ maxSize }
          multiple={ false } 
          acceptType='image/*' 
          handleAccepted={ onDrop } 
          handleRejected={ () => setImage(null) }
          errorsInside={ errorsInside }
        />
      }
    </div>
  )
}

export default DropzoneWithPreview;