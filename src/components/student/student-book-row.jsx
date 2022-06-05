import React, { Component } from 'react';

class StudentBookRow extends Component {
  render() { 
    const items = this.props.books || [];

    const listItems = items.map((item, index) =>
      <tr className="inner-box" key={index}>
        <th scope="row">
          <div className="event-date">
            <span>{item.created_at}</span>
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
          <span className={`badge ${item.status == 'available' ? 'bg-success' : 'bg-warning'}`}>{item.status}</span>
        </td>
        <td>
          <div className="primary-btn text-center">
            <button className="btn btn-success">Request</button>
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
 
export default StudentBookRow;