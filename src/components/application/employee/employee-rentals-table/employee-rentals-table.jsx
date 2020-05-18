import React from 'react';
import { connect } from 'react-redux';

import './employee-rentals-table.scss';
import BtnWModal from '../../../general/btn-w-modal/btn-w-modal.component';
import SimpleDateInput from '../../simple-date-in/simple-date-in.component';
import { updateRentalReturnStart } from '../../../../redux/employee/employee.actions';

const EmployeeRentalsTable = ({ rentals, updateRentalReturn }) => {

  const dateAddDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const dateToStr = date => {
    const d = new Date(date);
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
  }

  const getRowClass = r => `${r.returnedOnTime || new Date() > dateAddDays(r.rented, r.daysToReturn) ? 'order-warning' : ''}`;

  return (
    <div className='rentals-table'>
      <table>
        <thead>
          <tr>
            <th>Movie</th>
            <th>User</th>
            <th>User Phone</th>
            <th>Rent Date</th>
            <th>Return Date</th>
            <th>Latest Return Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {
          rentals.map(r => <tr key={ r.id } className={getRowClass(r)} >
              <td>{ `${r.movieTitle}, ${r.movieReleaseYear}, ${r.movieLanguage}` }</td>
              <td>{ `${r.userFirstName} ${r.userLastName}` }</td>
              <td>{ r.userPhone }</td>
              <td>{ dateToStr(r.rented) }</td>
              <td>
                { `${ r.returned ? dateToStr(r.returned) : 'To return'}` }
                <BtnWModal 
                  btnLabel='Change' 
                  ModalComp={
                    () => ( <SimpleDateInput 
                      minDate={ r.rented } 
                      date={ r.returned ? r.returned : null } 
                      onSubmit={ values => updateRentalReturn(r.id, values.date)}
                      title='Set return date' 
                    />
                  )}
                />
              </td>
              <td>{ dateToStr(dateAddDays(r.rented, r.daysToReturn)) }</td>
              <td>{ r.rentPrice }</td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
  )
}

const mapDispachToProps = dispatch => ({
  updateRentalReturn: (rentalId, date) => dispatch(updateRentalReturnStart({ rentalId, date }))
});

export default connect(null, mapDispachToProps)(EmployeeRentalsTable);