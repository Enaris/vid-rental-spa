import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cartridge-rent-list-page.styles.scss';
import CartridgeRentList from '../../components/application/cartridge/cartridge-rent-list/cartridge-rent-list.component';
import { 
  selectRentList, 
  selectRentListLoading 
} from '../../redux/cartridge-rent/cartridge-rent.selectors';
import { fetchRentListStart } from '../../redux/cartridge-rent/cartridge-rent.actions';

const CartridgeRentListPage = ({ fetchRentList, rentList, listLoading }) => {
  useEffect(() => {
    fetchRentList();
  }, [fetchRentList])
  
  return (
    <div className='cartridge-rent-list-page content-container'>
      {
        listLoading 
        ? <div> Items for rent are lodaing </div> 
        : !listLoading && rentList && !rentList.length
        ? <div> Check shop later, currently there are no items here </div>
        : <CartridgeRentList cartridges={ rentList } />
      }
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  rentList: selectRentList,
  listLoading: selectRentListLoading
});

const mapDispatchToProps = dispatch => ({
  fetchRentList: () => dispatch(fetchRentListStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartridgeRentListPage);