import React from 'react';

import './orders-table.styles.scss';

const OrdersTable = ({ orders }) => {

  const dateAddDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const dateToStr = date => {
    const d = new Date(date);
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
  }

  const getRowClass = o => `${o.returnedOnTime || new Date() > dateAddDays(o.rented, o.daysToReturn) ? 'order-warning' : ''}`;

  return (
    <div className='orders-table'>
      <table>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Rent Date</th>
            <th>Return Date</th>
            <th>Latest Return Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {
          orders.map(o => <tr key={ o.id } className={getRowClass(o)} >
              <td>{ `${o.movieTitle}, ${o.movieReleaseYear}, ${o.movieLanguage}` }</td>
              <td>{ dateToStr(o.rented) }</td>
              <td>{ `${o.returned ? dateToStr(o.returned) : 'To return'}` }</td>
              <td>{ dateToStr(dateAddDays(o.rented, o.daysToReturn)) }</td>
              <td>{ o.rentPrice }</td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
  )
}

export default OrdersTable;