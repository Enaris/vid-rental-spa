import React from 'react';


import './cartridge-list-item.styles.scss';

const CartridgesListItem = ({ cartridge: { id, movieTitle, language, avaibleAmount, unavaibleAmount }}) => {
  const { path } = useRouteMatch();
  
  return (
    <div>
      
    </div>
  )
}

export default CartridgesListItem;
