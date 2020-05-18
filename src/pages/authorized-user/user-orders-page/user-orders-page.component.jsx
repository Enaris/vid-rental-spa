import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';

import './user-orders-page.styles.scss';
import OrdersTable from '../../../components/application/orders/orders-table/orders-table.component';
import { selectUserRentals, selectRentalsLoading } from '../../../redux/shop-user/shop-user.selectors';
import { selectUserId } from '../../../redux/auth/auth.selectors';
import { fetchUserRentalsStart } from '../../../redux/shop-user/shop-user.actions';

const UserOrdersPage = ({ rentals, loading, fetchRentals, userId }) => {

  useEffect(() => {
    fetchRentals(userId);
  }, [userId, fetchRentals])

  return (
    <div className='user-orders-page'>
      {
        loading 
        ? <div> Your rentals are loading </div>
        : !rentals.length 
        ? <div> You do not have any any rentals </div>
        : <OrdersTable orders={ rentals } />
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  rentals: selectUserRentals,
  loading: selectRentalsLoading,
  userId: selectUserId
});

const mapDispatchToProps = dispatch => ({
  fetchRentals: userId => dispatch(fetchUserRentalsStart(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOrdersPage);