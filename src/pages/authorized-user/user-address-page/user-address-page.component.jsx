import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './user-address-page.styles.scss';
import AddressTable from '../../../components/application/address/address-table/address-table.component';
import { selectAddresses, selectAddressesLoading } from '../../../redux/address/address.selectors';
import { fetchAddressesStart } from '../../../redux/address/address.actions';
import { selectUserId } from '../../../redux/auth/auth.selectors';

const UserAddressPage = ({ addresses, loading, userId, fetchAddresses }) => {
  useEffect(() => {
    fetchAddresses(userId)
  }, [fetchAddresses, userId])


  return (
    <div className='address-page'>
      {
        loading 
        ? <div> Addresses are loading </div>
        : <AddressTable addresses={ addresses }/>
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  addresses: selectAddresses,
  loading: selectAddressesLoading,
  userId: selectUserId
})

const mapDispatchToProps = dispatch => ({
  fetchAddresses: userId => dispatch(fetchAddressesStart(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAddressPage);