import React, { useState } from 'react';

import './dropzone-w-preview.styles.scss';

import VidDropzone from '../../../forms/vid-dropzone/vid-dropzone.component';


const DropzoneWithPreview = ({ maxSize }) => {
  const [image, setImage] = useState(null);


  const onDrop = file => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setImage(fileReader.result)
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className='dropzone-w-preview w100'>

      <VidDropzone 
        maxSize={ maxSize }
        multiple={ false } 
        acceptType='image/*' 
        handleAccepted={ onDrop } 
        handleRejected={ () => setImage(null) }
      />

      <div className='img-preview'>
        {
          image &&
          <img src={image} alt='dropped' />
        }
      </div>
    </div>
  )
}

export default DropzoneWithPreview;