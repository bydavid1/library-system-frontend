import React, { Component } from 'react';

class BorrowingRow extends Component {

  render() { 
    const items = this.props.borrowings || [];

    const listItems = items.map((item, index) =>
      <tr className="inner-box" key={index}>
        <th scope="row">
          <div className="event-date text-center">
            <span>{item.createdAt}</span>
          </div>
        </th>
        <td>
          <p>{item.user_name}</p>
        </td>
        <td>
          <p>{item.book_name}</p>
        </td>
        <td>
          <p>{item.book_author}</p>
        </td>
        <td>
          <div className="primary-btn text-center">
            <button className="btn btn-primary me-2">Accept</button>
            <button className="btn btn-danger">Refuse</button>
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
 
export default BorrowingRow;