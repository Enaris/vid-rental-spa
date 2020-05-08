import React, { useState } from 'react';

import './btn-w-confirm.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import ConfirmModal from '../confirm-modal/confirm-modal.component';

const BtnWConfirm = ({ btnLabel, 
  btnAction, 
  modalYesAction,
  modalNoAction,
  ModalContent,
  className,
  modalYesLabel='Yes', 
  modalNoLabel='No', 
  modalQuestion='Are you sure?' }) => {
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
      <ConfirmModal 
        close={ closeModal }
        onClick={ closeModal }
        isOpen={ modalOpen }
        yesLabel={ modalYesLabel }
        noLabel={ modalNoLabel }
        question={ modalQuestion }
        onYes={ modalYesAction }
        onNo={ modalNoAction }
        ContentComponent={ ModalContent }
      />
    </div>
  )
}

export default BtnWConfirm;