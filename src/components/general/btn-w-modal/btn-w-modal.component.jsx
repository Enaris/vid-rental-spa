import React, { useState } from 'react';
import Modal from 'react-modal'

import './btn-w-modal.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const BtnWModal = ({ btnLabel, 
  btnAction, 
  className,
  modalLabel,
  ModalComp  
}) => {
  const [ modalOpen, setModalOpen ] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const onBtn = () => {
    openModal();
    if (btnAction)
      btnAction();
  }

  return (
    <div>
      <CustomButton 
        onClick={ () => onBtn() } 
        label={ btnLabel }
        className={ className }
      />
      <Modal 
        isOpen={ modalOpen }
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
        <div className='modal-container' onClick={ () => closeModal() }>
          <div className='modal-content' onClick={ e => e.stopPropagation() }>
            {
              modalLabel && <div>{ modalLabel }</div>
            }
            <ModalComp closeModal={ closeModal } />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default BtnWModal;