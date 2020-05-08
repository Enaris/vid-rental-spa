import React from 'react';

import './address-card.styles.scss';

const AddressCard = ({ address: { firstName, lastName, phoneNumber, street, zipCode, city }}) => {

  return (
    <div className='address-card'>
      <div className='address-card-content'> 
        <div>{ `${firstName}, ${lastName}` }</div>
        <div>{ `Tel: ${phoneNumber}` }</div>
        <div>{ street }</div>
        <div>{ zipCode }</div>
        <div>{ city }</div>
      </div>
    </div>
  )
}

export default AddressCard;