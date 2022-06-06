import React, { Component } from 'react';

class StudentRequestRow extends Component {
  render() { 
    const items = this.props.requests || [];

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
              <p>{item.book_name}</p>
            </td>
            <td>
              <span className={`badge ${color}`}>{item.status}</span>
            </td>
            <td>
              <p className='text-secondary text-center'>Actions unavailable</p>
            </td>
          </tr>
        );
      }
    );

    return (
      <React.Fragment>
        {listItems}
      </React.Fragment>
    );
  }
}
 
export default StudentRequestRow;