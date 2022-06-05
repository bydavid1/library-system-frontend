import React, { Component } from 'react';

import UserRow from '../../components/librarian/user-row';
import LibrarianDashboard from '../../components/librarian-dashboard';
import { Link } from 'react-router-dom';

class UsersScreen extends Component {

  constructor(props) {
    super(props);

    this.users = [
      {
        created: '11/11/11',
        email: 'Byron Jimenez',
        first_name: 'Byron Jimenez',
        last_name: 'The best book',
        role: 'JOrge Shafick Handal' 
      },
      {
        created: '11/11/11',
        email: 'Byron Jimenez',
        first_name: 'Byron Jimenez',
        last_name: 'The best book',
        role: 'JOrge Shafick Handal' 
      },
      {
        created: '11/11/11',
        email: 'Byron Jimenez',
        first_name: 'Byron Jimenez',
        last_name: 'The best book',
        role: 'JOrge Shafick Handal' 
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
                    <h2 className='text-white'>Users registered</h2>
                    <p className='text-white'>
                      In ludus latine mea, eos paulo quaestio an. Meis possit ea sit. Vidisse molestie<br />
                      cum te, sea lorem instructior at.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className='card-header'>
                    <Link to='/user/add' className='btn btn-success'>Add user</Link>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="text-center" scope="col">Created</th>
                            <th scope="col">Email</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Role</th>
                            <th className="text-center" scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <UserRow users={this.users}/>
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
 
export default UsersScreen;