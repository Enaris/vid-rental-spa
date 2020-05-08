import React from 'react';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './address-table.styles.scss';
import BtnWConfirm from '../../../general/btn-w-confirm/btn-w-confirm.component';
import CustomButton from '../../../general/custom-button/custom-button.component';
import { selectUserId } from '../../../../redux/auth/auth.selectors';
import { deactivateAddressStart } from '../../../../redux/address/address.actions';

const AddressTable = ({ addresses, userId, deactivateAddress }) => {
  const { push } = useHistory();
  return (
    <div className='address-table'>
      {
        addresses && addresses.length > 0 &&
        <table>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Phone Number</td>
              <td>City</td>
              <td>Zip Code</td>
              <td>Street</td>
              <td>Remove</td>
            </tr>          
          </thead>
          <tbody>
            {
              addresses.map(a => 
                <tr key={ a.id }>
                  <td>{ a.firstName }</td>
                  <td>{ a.lastName }</td>
                  <td>{ a.phoneNumber }</td>
                  <td>{ a.city }</td>
                  <td>{ a.zipCode }</td>
                  <td>{ a.street }</td>
                  <td>
                    <BtnWConfirm 
                      btnLabel='Remove' 
                      modalYesAction={() => deactivateAddress(a.id, userId)}
                      className='remove-btn' 
                    />
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      }
      
      <CustomButton className='w100' label='ADD ADDRESS' onClick={()=> push('address/add')}/>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  userId: selectUserId
});

const mapDispatchToProps = dispatch => ({
  deactivateAddress: (addressId, userId) => dispatch(deactivateAddressStart(addressId, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressTable);