import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useRouteMatch } from 'react-router-dom';

import './rent-cartridge-page.styles.scss';
import { 
  selectRentFormLoading, 
  selectRentForm, 
  selectRentFormErrors 
} from '../../../redux/cartridge-rent/cartridge-rent.selectors';
import { fetchRentFormStart } from '../../../redux/cartridge-rent/cartridge-rent.actions';
import RentForm from '../../../components/forms/rent-form/rent-form.component';

const RentCartridgePage = ({ fetchFormData, loading, errors, formData }) => {
  const { params: { cartridgeId, userId }} = useRouteMatch();

  useEffect(() => {
    console.log(cartridgeId);
    console.log(userId);
    fetchFormData(cartridgeId, userId);
  }, [fetchFormData, cartridgeId, userId]);
  
  return (
    <div className='rent-cartridge-page'>
      {
        loading 
        ? <div> Cartridge to rent is loading </div>
        : !loading && errors 
        ? (errors.Cartridge 
          ? <div> Cartridge you want to rent does not seem to exist </div> 
          : errors.User 
          ? <div> You cannot rent cartridge with unsettled rentals, check your rent history for details </div>
          : errors.NoItems
          ? <div> Requested cartridge is already rented out </div> 
          : <div> Something went wrong, try again later </div>)
        : <RentForm cartidgeRental={ formData } />
      }
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  loading: selectRentFormLoading,
  formData: selectRentForm,
  errors: selectRentFormErrors
});

const mapDispatchToProps = dispatch => ({
  fetchFormData: (cartridgeId, userId) => dispatch(fetchRentFormStart(cartridgeId, userId)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(RentCartridgePage);