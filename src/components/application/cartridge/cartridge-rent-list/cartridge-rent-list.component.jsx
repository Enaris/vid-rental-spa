import React from 'react';

import './cartridge-rent-list.styles.scss';
import CartridgeRentItem from '../cartridge-rent-list-item/cartridge-rent-list-item.component';

const CartridgeRentList = ({ cartridges }) => (
  <div className='cartridge-rent-list'>
    {
      cartridges.map(c => <CartridgeRentItem key={ c.id } cartridge={ c } />)
    }
  </div>
)

export default CartridgeRentList;