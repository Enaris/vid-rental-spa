import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './employee-rentals-page.scss';
import { selectRentalsLoading, selectRentals } from '../../../redux/employee/employee.selectors';
import { fetchAllRentalsStart } from '../../../redux/employee/employee.actions';
import EmployeeRentalsTable from '../../../components/application/employee/employee-rentals-table/employee-rentals-table';

const EmployeeRentalsPage = ({ rentals, loading, fetchAllRentals }) => {

  useEffect(() => {
    fetchAllRentals();
  }, [fetchAllRentals])

  return (
    <div className='employee-rentals-page'>
      {
        loading 
        ? <div> Rentals are loading </div>
        : !rentals.length 
        ? <div> There are no rentals yet </div>
        : <EmployeeRentalsTable rentals={ rentals } />
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  loading: selectRentalsLoading,
  rentals: selectRentals
});

const mapDispatchToProps = dispatch => ({
  fetchAllRentals: () => dispatch(fetchAllRentalsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeRentalsPage);