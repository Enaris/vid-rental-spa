import React from 'react';
import Modal from 'react-modal'

import './confirm-modal.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const ConfirmModal = ({ isOpen, 
  onYes, 
  onNo, 
  close,
  ContentComponent,
  yesLabel='Yes', 
  noLabel='No',
  question='Are you sure?'
  }) => {
  
  const yes = () => {
    if (onYes)
      onYes();
    close();
  }

  const no = () => {
    if (onNo)
      onNo();
    close();
  }

  return (
    <Modal 
      isOpen={ isOpen }
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
      <div className='modal-container' onClick={ () => close() }>
        <div className='modal-content' onClick={ e => e.stopPropagation() }>
          <div>{ question }</div>
          <div className='modal-content-component'>
          {
            ContentComponent && 
            <ContentComponent />
          }
          </div>
          <div className='modal-buttons'>
            <CustomButton 
              className='modal-btn' 
              onClick={() => yes()} 
              label={ yesLabel } 
            />
            <CustomButton className='modal-btn' onClick={() => no()} label={ noLabel } />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ConfirmModal;