import React from 'react';

import './address-card-list.styles.scss';
import AddressCard from '../address-card/address-card.component';

const AddressCardList = ({ addressList }) => (
  <div className='address-card-list'>
    { 
      addressList.map(address => <AddressCard key={ address.id } address={ address } /> )
    }
  </div>
);

export default AddressCardList;