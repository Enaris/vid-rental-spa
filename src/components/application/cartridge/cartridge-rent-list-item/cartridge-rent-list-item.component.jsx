import React from 'react';

import './cartridge-rent-list-item.styles.scss';
import staticUrls, { getImageSrc } from '../../../../redux/api/api.urls';

const CartridgeRentItem = ({ cartridge: 
  { id, 
    movieTitle, 
    movieDescription, 
    language, 
    copiesAvaible, 
    rentPrice,
    movieCoverUrl }
  }) => {
  const thumbnail = movieCoverUrl ? getImageSrc(movieCoverUrl) : staticUrls.noCoverImageUrl;
  
  return (
    <div className='cartridge-rent-item w100'>
      <div className='cartridge-rent-item-thumbnail'>
        <img className='thumbnail-img' src={ thumbnail } alt={ movieTitle }/>
      </div>
      <div className='cartridge-rent-item-text w100'>
        <div className='cartridge-rent-item-title'>
          { movieTitle }
        </div>
        <div className='cartridge-rent-item-content'>
          <div className='cartridge-rent-item-decs'>
            { movieDescription }
          </div>
          <div className='cartridge-rent-item-right'>
            <div className='cartridge-rent-item-price'>
              { rentPrice }
            </div>
            <div className='cartridge-rent-item-lang'>
              { language }
            </div>
            <div className='cartridge-rent-item-avaible'>
              { copiesAvaible }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartridgeRentItem;