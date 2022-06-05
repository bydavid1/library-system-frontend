import React, { Component } from 'react';

class BorrowingRow extends Component {

  render() { 
    const items = this.props.borrowings || [];

    const listItems = items.map((item, index) => {
      let color = item.status == 'refused' ? 'bg-danger' : item.status == 'confirmed' ? 'bg-success' : item.status == 'returned' ? 'bg-secondary' :'bg-warning'
      return (
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
          <span className={`badge ${color}`}>{item.status}</span>
        </td>
        <td>
          <div className="primary-btn text-center">
            {
              item.status == 'pending' ?
              <React.Fragment>
                <button className="btn btn-success me-2" onClick={() => this.props.onConfirm(item.id)}>Accept</button>
                <button className="btn btn-danger" onClick={() => this.props.onRefuse(item.id)}>Refuse</button>
              </React.Fragment> :
              item.status == 'confirmed' ?
                <React.Fragment>
                  <button className="btn btn-primary me-2" onClick={() => this.props.onReturn(item.id)}>Return</button>
                </React.Fragment>:
                <p className='text-secondary'>No available actions</p>
            }
          </div>
        </td>
      </tr>
      )
    });

    return (
      <React.Fragment>
        {listItems}
      </React.Fragment>
    );
  }
}
 
export default BorrowingRow;