import React, { useState } from 'react'
import Modal from 'react-modal';

import './image-w-zoom.styles.scss';

const ImageWZoom = ({ imageUrl, onZoom, onZoomOut }) => {
  const [ showLarge, setShowLarge ] = useState(false);

  const zoom = () => {
    if (onZoom)
      onZoom();
    setShowLarge(true);
  }

  const zoomOut = () => {
    if (onZoomOut)
      onZoomOut();
    setShowLarge(false);
  }

  return (
    <div className='img-w-zoom-container'>
      <div className='img-w-zoom'>
        <img src={ imageUrl } alt='w-zoom' onClick={() => zoom()} />
      </div>
      <Modal 
        isOpen={ showLarge }
        appElement={document.getElementById('root')}
        style={{ 
          content: {
            padding: 0,
            borderRadius: 0,
            background: 'none',
            border: 'none',
            inset: 0
          }
        }}
      >
        <div className='w100 h100 zoom-modal-container' onClick={() => zoomOut()}>
          <img src={ imageUrl } className='zoom-modal-img' alt='zoomed'  />
        </div>
      </Modal>
    </div>
  )
}

export default ImageWZoom;