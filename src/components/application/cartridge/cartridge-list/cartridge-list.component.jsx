import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './cartridge-list.styles.scss';

const CartridgeList = ({ cartridges }) => {
  const { path } = useRouteMatch();

  return (
    <div className='cartridge-list'>
      <table>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Language</th>
            <th>Avaible Copies</th>
            <th>Unavaible Copies</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            cartridges.map(c =>
              <tr key={ c.id }>
                <td><Link to={`/employee/movies/${c.movieId}/edit`}>{ c.movieTitle }</Link></td>
                <td>{ c.language }</td>
                <td>{ c.copiesAvaible }</td>
                <td>{ c.copiesUnavaible }</td>
                <td><Link to={`${path}/${c.id}/edit`}>EDIT</Link></td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default CartridgeList;
