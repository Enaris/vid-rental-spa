import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './employee-cartridges-page.styles.scss';
import CartridgeList from '../../../components/application/cartridge/cartridge-list/cartridge-list.component';
import { selectCartridges, selectCartridgesLoading } from '../../../redux/cartridge/cartridge.selectors';
import { fetchCartridgesStart } from '../../../redux/cartridge/cartridge.actions';

const EmployeeCartridgesPage = ({ cartridges, cartridgesLoading, fetchCartridges }) => {
  useEffect(() => {
    fetchCartridges();
  }, [fetchCartridges])
  
  return (
    <div className='employee-cartridges-page'>
      {
        cartridgesLoading 
        ? <div> Cartridges are loading </div>
        : !cartridgesLoading && !cartridges
        ? <div> No cartridges yet </div>
        : <CartridgeList cartridges={ cartridges } />
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartridges: selectCartridges,
  cartridgesLoading: selectCartridgesLoading
})

const mapDispatchToProps = dispatch => ({
  fetchCartridges: () => dispatch(fetchCartridgesStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCartridgesPage);
