import React, { Component } from 'react';

class BookRow extends Component {

  render() { 
    const items = this.props.books || [];

    const listItems = items.map((item, index) =>
      <tr className="inner-box" key={index}>
        <th scope="row">
          <div className="text-center">
            <span>{item.createdAt}</span>
          </div>
        </th>
        <td>
          <p>{item.title}</p>
        </td>
        <td>
          <p>{item.author}</p>
        </td>
        <td>
          <p>{item.published_year}</p>
        </td>
        <td>
          <p>{item.genre}</p>
        </td>
        <td>
          <p>{item.stock}</p>
        </td>
        <td>
          <div className="primary-btn text-center">
            <p className='text-secondary'>Actions unavailable</p>
          </div>
        </td>
      </tr>
    );

    return (
      <React.Fragment>
        {listItems}
      </React.Fragment>
    );
  }
}
 
export default BookRow;