import React, { Component } from 'react';
import StudentDashboard from '../../components/student-dashboard';
import StudentBookRow from '../../components/student/student-book-row';

class StudentBooksScreen extends Component {

  constructor(props) {
    super(props);
    
    this.books = [
      {
        created_at: '11/11/11',
        title: 'The best book',
        author: 'Byron Jimenez',
        published_year: '2021',
        genre: 'Suspense',
        status: 'available'
      },
      {
        created_at: '11/11/11',
        title: 'The best book',
        author: 'Byron Jimenez',
        published_year: '2021',
        genre: 'Suspense',
        status: 'unavailable'
      },
      {
        created_at: '11/11/11',
        title: 'The best book',
        author: 'Byron Jimenez',
        published_year: '2021',
        genre: 'Suspense',
        status: 'unavailable'
      },
    ];
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
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Year published</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Status</th>
                            <th className="text-center" scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <StudentBookRow books={this.books}/>
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