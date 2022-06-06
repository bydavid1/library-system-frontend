import React, { Component } from 'react';
import StudentDashboard from '../../components/student-dashboard';
import StudentRequestRow from '../../components/student/student-request-row';
import borrowingService from '../../services/borrowing.service';

class StudentRequestsScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      requests: [],
      message: ""
    }
  }

  componentDidMount() {
    borrowingService.getBorrowingsByUser()
    .then(response => {
      this.setState({
        requests: response.data
      })
    },
    error => {
      this.setState({
        message:
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
      });
    }
  );
  }

  render() { 
    return (
      <StudentDashboard>
        <div className="bg-color pad100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text">
                    <h2 className='text-white'>Available books</h2>
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
                            <th scope="col">Book</th>
                            <th scope="col">Status</th>
                            <th className="text-center" scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <StudentRequestRow requests={this.state.requests}/>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StudentDashboard>
    );
  }
}
 
export default StudentRequestsScreen;