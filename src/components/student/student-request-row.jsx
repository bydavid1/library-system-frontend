import React, { Component } from 'react';

class StudentRequestRow extends Component {
  render() { 
    const items = this.props.requests || [];

    const listItems = items.map((item, index) =>
      <tr className="inner-box" key={index}>
        <th scope="row">
          <div className="event-date">
            <span>{item.created_at}</span>
          </div>
        </th>
        <td>
          <p>{item.book_name}</p>
        </td>
        <td>
          <span className={`badge ${item.status == 'accepted' ? 'bg-success' : 'bg-warning'}`}>{item.status}</span>
        </td>
        <td>
          <p className='text-secondary text-center'>Actions unavailable</p>
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
 
export default StudentRequestRow;