import React, { Component } from 'react';
import StudentDashboard from '../../components/student-dashboard';
import StudentBookRow from '../../components/student/student-book-row';
import bookService from '../../services/book.service';

class StudentBooksScreen extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      books: [],
      query: '',
      success: false,
      message: ""
    }
    
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.requestBook = this.requestBook.bind(this);
  }

  componentDidMount() {
    this.getBooksForStudent();
  }

  getBooksForStudent() {
    bookService.getBooks()
      .then(response => {
        this.setState({
          books: response.data
        })
      },
      error => {
        this.setState({
          success: false,
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

  requestBook(id) {
    bookService.requestBook(id)
      .then(response => {
        this.setState({
          success: true,
          message: response.data.message ?? 'Requested successfully'
        })
        this.getBooksForStudent();
      }).catch(error => {
        console.log(error)
        this.setState({
          success: false,
          message:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      })
  }

  search(e) {
    e.preventDefault();
    if (this.state.query != '') {
      bookService.searchBook(this.state.query)
        .then(response => {
          console.log(response);
          this.setState({
            books: response.data
          })
        },
        error => {
          this.setState({
            success: false,
            message:
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString()
          });
        }
      );
    } else {
      this.setState({
        success: false,
        message: 'Search input must be filled'
      });
    }
  }

  handleChange(event) {
    this.setState({query: event.target.value});
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
              <div className="col-md-8">
                <form className="form-inline">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" value={this.state.query} onChange={this.handleChange} placeholder='Search by title, author or genre'/>
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit" onClick={this.search}>Search</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                  {this.state.message && (
                    <div className="form-group mb-4">
                      <div className={`alert ${this.state.success ? 'alert-success' : 'alert-danger'}`} role="alert">
                        {this.state.message}
                      </div>
                    </div>
                  )}
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="text-center" scope="col">Date</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Year published</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Status</th>
                            <th className="text-center" scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <StudentBookRow books={this.state.books} onRequest={this.requestBook}/>
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
 
export default StudentBooksScreen;