import React from 'react';

import './address-card.styles.scss';

const AddressCard = ({ city, zipCode, city }) => {
  const { city, zipCode, city } = address;

  return (
    <div className='address-card'>
      <p>{ city }</p>
      <p>{ zipCode }</p>
      <p>{ address }</p>
    </div>
  )
}

export default AddressCard;