import React from 'react';

import './multi-dropzone-w-preview.styles.scss';

import VidDropzone from '../../../forms/vid-dropzone/vid-dropzone.component';

const MultiDropzone = ({ maxSize, label, handleDrop, handleAccepted, handleRejected, errorsInside }) => {
  const onDrop = files => {
    handleDrop(files);
    if (handleAccepted)
      handleAccepted(files);
  }

  return (
    <div className='dropzone-w-preview'>
      <VidDropzone 
          label={ label }
          maxSize={ maxSize }
          multiple={ true } 
          acceptType='image/*' 
          handleRejected={ handleRejected }
          handleAccepted={ onDrop } 
          errorsInside={ errorsInside }
        />
    </div>
  )
}

export default MultiDropzone;