import React, { useState, useEffect } from 'react';

import './dropzone-w-preview.styles.scss';

import VidDropzone from '../../../forms/vid-dropzone/vid-dropzone.component';


const DropzoneWithPreview = ({ maxSize, label, initImage, onRemove }) => {
  const [image, setImage] = useState(null); 
  const [showLarge, setShowLarge] = useState(false);

  useEffect(() => {
    if (initImage)
      setImage(initImage);
  }, [initImage])

  const onDrop = file => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setImage(fileReader.result)
    };
    fileReader.readAsDataURL(file);
  }

  const onXClick = () => {
    setImage(null);
  }

  return (
    <div className='dropzone-w-preview'>
      {
        image ?
        <div className='preview-container'>
          <div className='img-preview-x-btn' onClick={() => onXClick()}>X</div>
          <div className='img-preview'>
            <img src={image} alt='dropped' onClick={() => setShowLarge(true)} />
          </div>
        </div>
        :
        <VidDropzone 
          label={ label }
          maxSize={ maxSize }
          multiple={ false } 
          acceptType='image/*' 
          handleAccepted={ onDrop } 
          handleRejected={ () => setImage(null) }
        />
      }
      {
        showLarge &&
        <div className='modal-warp' onClick={() => setShowLarge(false)}>
          <div className='modal-overlay'></div>
          <img src={ image } className='modal' alt='dropped Large' />
        </div>
      }
    </div>
  )
}

export default DropzoneWithPreview;