import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useRouteMatch } from 'react-router-dom';

import './cartridge-edit-page.styles.scss';
import {
  selectCartridgeDetails,
  selectCartridgeDetailsLoading
} from '../../../redux/cartridge/cartridge.selectors';
import { fetchCartridgeStart } from '../../../redux/cartridge/cartridge.actions';
import CartridgeEdit from '../../../components/application/cartridge/cartridge-edit/cartridge-edit.component';

const CartridgeEditPage = ({ cartridge, cartridgeLoading, fetchCartridge }) => {
  const { params: { id }} = useRouteMatch(); 
  
  useEffect(() => {
    fetchCartridge(id);
  }, [fetchCartridge, id])

  return (
    <div className='cartridge-edit-page'>
      {
        cartridgeLoading 
        ? <div> Cartridge is loading </div>
        : !cartridgeLoading && !cartridge
        ? <div> Cartridge not found </div>
        : <CartridgeEdit cartridge={ cartridge } />
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartridge: selectCartridgeDetails,
  cartridgeLoading: selectCartridgeDetailsLoading,
})

const mapDispatchToProps = dispatch => ({
  fetchCartridge: id => dispatch(fetchCartridgeStart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartridgeEditPage);