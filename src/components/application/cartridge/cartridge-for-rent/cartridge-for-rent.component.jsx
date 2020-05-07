import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './cartridge-for-rent.styles.scss';
import ImageWZoom from '../../../general/image-w-zoom/image-w-zoom.component';
import staticUrls, { getImageSrc } from '../../../../redux/api/api.urls';
import MovieImageList from '../../movie-image-list/movie-image-list.component';
import CustomButton from '../../../general/custom-button/custom-button.component'; 
import { selectCurrentUser, selectLoading, selectUserRoles } from '../../../../redux/auth/auth.selectors';
import UserRoles from '../../../../redux/api/api.user-roles';

const CartridgeForRent = ({ 
  loading, 
  user,
  userRoles,
  cartridge: { 
    id,
    movieTitle,
    movieDescription,
    language,
    avaible,
    rentPrice,
    daysToReturn,
    movieDirector,
    images,
    otherLanguages
  }
}) => {
  const { push } = useHistory();
  const cover = images.find(i => i.imageType === 'Cover');
  const coverUrl = cover ? getImageSrc(cover.url) : staticUrls.noCoverImageUrl;
  return (
    <div className='cartridge-for-rent'>
      <div className='cartridge-for-rent-content-container'>
        <div className='movie-cover'>
          <div className='cover-img-container'>
            <ImageWZoom imageUrl={ coverUrl } />
          </div>
        </div>
        <div className='cartridge-for-rent-desc'>
          <h2 className='movie-title'>
            { movieTitle }
          </h2>
          <div className='details-container'>
            <div className='movie-details'>
              <div className='movie-language'>
                Language: { language }
              </div>
              
              <div className='movie-director'>
                Director: { movieDirector }
              </div>

              <div className='movie-description'>
                { movieDescription }
              </div>
            </div>
            <div className='rent-details'> 
              <div className='rent-price'>
                Rent price: { rentPrice }
              </div>

              <div className='rent-avaible'>
                Avaible: { avaible }
              </div>

              <div className='days-to-return'>
                Days to return: { daysToReturn }
              </div>
              {
                !loading && user && userRoles.some(r => r.name === UserRoles.User) &&
                <div className='rent-button-container'>
                  <CustomButton 
                    onClick={() => push(`${id}/rent/${user.id}`)}
                    label='RENT'
                    className='rent-button' 
                    disabled={ avaible < 1 } 
                  />
                </div>
              }
            </div>
          </div>
          {
            !!otherLanguages && otherLanguages.length > 0 &&
            <div className='other-languages'>
              Avaible also in: 
              {
                otherLanguages.map((l, i) => [
                  i > 0 && ', ',
                  <Link key={ l.cartridgeId } to={ l.cartridgeId }>{ `${l.language}` }</Link>
                ])
              }
            </div>
          }
        </div>
              
      </div>
      <div className='cartridge-images'>
        <MovieImageList images={ 
          images.filter(i => i.imageType !== 'Cover').map(i => ({ key: i.id, url: getImageSrc(i.url)})) } 
          label='IMAGES'
        />
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  user: selectCurrentUser,
  userRoles: selectUserRoles
});

export default connect(mapStateToProps)(CartridgeForRent);