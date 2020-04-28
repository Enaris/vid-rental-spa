import React from 'react';

import './multi-dropzone-w-preview.styles.scss';

import VidDropzone from '../../../forms/vid-dropzone/vid-dropzone.component';

const MultiDropzone = ({ maxSize, label, handleDrop }) => {
  const onDrop = files => {
    handleDrop(files);
  }

  return (
    <div className='dropzone-w-preview'>
      <VidDropzone 
          label={ label }
          maxSize={ maxSize }
          multiple={ true } 
          acceptType='image/*' 
          handleAccepted={ onDrop } 
        />
    </div>
  )
}

export default MultiDropzone;