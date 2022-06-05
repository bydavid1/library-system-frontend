import React, { Component } from 'react';

import BorrowingRow from '../../components/librarian/borrowing-row';
import LibrarianDashboard from '../../components/librarian-dashboard';
import borrowingService from '../../services/borrowing.service';

class BorrowingsScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      borrowings: [],
      message: null
    }
  }

  getAllBorrowings() {
    borrowingService.getAllBorrowings()
      .then(response => {
        this.setState({
          message: "",
          borrowings: response.data
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

  componentDidMount() {
    this.getAllBorrowings();
  }

  confirmBorrowing(id) {
    borrowingService.confirmBorrowing()
      .then(response => {
        console.log(response.data);
        this.getAllBorrowings();
      }).catch(error => {
        this.setState({
          message:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      })
  }

  refuseBorrowing(id) {
    borrowingService.refuseBorrowing()
      .then(response => {
        console.log(response.data);
        this.getAllBorrowings();
      }).catch(error => {
        this.setState({
          message:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      })
  }

  returnBook(id) {
    borrowingService.returnBook()
      .then(response => {
        console.log(response.data);
        this.getAllBorrowings();
      }).catch(error => {
        this.setState({
          message:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      })
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
                  {this.state.message && (
                    <div className="form-group mb-4">
                      <div className="alert alert-danger" role="alert">
                        {this.state.message}
                      </div>
                    </div>
                  )}
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="text-center" scope="col">Date</th>
                            <th scope="col">User</th>
                            <th scope="col">Book</th>
                            <th scope="col">Author</th>
                            <th scope="col">Status</th>
                            <th className="text-center" scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <BorrowingRow borrowings={this.state.borrowings} 
                            onConfirm={this.confirmBorrowing} 
                            onRefuse={this.refuseBorrowing}
                            onReturn={this.returnBook}/>
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