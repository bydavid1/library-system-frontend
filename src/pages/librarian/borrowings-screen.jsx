import React, { Component } from 'react';

import BorrowingRow from '../../components/librarian/borrowing-row';
import LibrarianDashboard from '../../components/librarian-dashboard';

class BorrowingsScreen extends Component {

  constructor(props) {
    super(props);

    this.borrowings = [
      {
        date: '11/11/11',
        user_name: 'Byron Jimenez',
        book_name: 'The best book',
        book_author: 'JOrge Shafick Handal' 
      },
      {
        date: '11/11/11',
        user_name: 'Byron Jimenez',
        book_name: 'The best book',
        book_author: 'JOrge Shafick Handal' 
      },
      {
        date: '11/11/11',
        user_name: 'Byron Jimenez',
        book_name: 'The best book',
        book_author: 'JOrge Shafick Handal' 
      },
    ];
  }
 
  render() { 
    return (
      <LibrarianDashboard>
        <div className="bg-color pad100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text">
                    <h2 className='text-white'>Pending book requests</h2>
                  </div>
                  <p className='text-white'>
                    In ludus latine mea, eos paulo quaestio an. Meis possit ea sit. Vidisse molestie<br />
                    cum te, sea lorem instructior at.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="text-center" scope="col">Date</th>
                            <th scope="col">User</th>
                            <th scope="col">Book</th>
                            <th scope="col">Author</th>
                            <th className="text-center" scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <BorrowingRow borrowings={this.borrowings}/>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LibrarianDashboard>
    );
  }
}
 
export default BorrowingsScreen;