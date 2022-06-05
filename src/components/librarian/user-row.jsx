import React, { Component } from 'react';

class UserRow extends Component {

  render() { 
    const items = this.props.users || [];

    const listItems = items.map((item, index) =>
      <tr className="inner-box" key={index}>
        <th scope="row">
          <div className="event-date">
            <span>{item.created}</span>
          </div>
        </th>
        <td>
          <p>{item.email}</p>
        </td>
        <td>
          <p>{item.first_name}</p>
        </td>
        <td>
          <p>{item.last_name}</p>
        </td>
        <td>
          <p>{item.role}</p>
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
 
export default UserRow;