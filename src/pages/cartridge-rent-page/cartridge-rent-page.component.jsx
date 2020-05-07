import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import './cartridge-rent-page.styles.scss';
import CartridgeForRent from '../../components/application/cartridge/cartridge-for-rent/cartridge-for-rent.component';
import { 
  selectCartridgeForRent,
  selectCartridgeForRentLoading
} from '../../redux/cartridge-rent/cartridge-rent.selectors';
import { fetchForRentStart } from '../../redux/cartridge-rent/cartridge-rent.actions';

const CartridgeRentPage = ({ fetchCartridgeForRent, cartridge, loading }) => {
  const { params: { id }} = useRouteMatch();

  useEffect(() => {
    fetchCartridgeForRent(id);
  }, [fetchCartridgeForRent, id])

  return (
    <div className='cartridge-rent-page content-container'>
      {
        loading 
        ? <div> Cartridge is loading </div>
        : !loading && !cartridge
        ? <div> Cartridge not found </div>
        : <CartridgeForRent cartridge={ cartridge }/>
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartridge: selectCartridgeForRent,
  loading: selectCartridgeForRentLoading
});

const mapDispatchToProps = dispatch => ({
  fetchCartridgeForRent: id => dispatch(fetchForRentStart(id)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(CartridgeRentPage);