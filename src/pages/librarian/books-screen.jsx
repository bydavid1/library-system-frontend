import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LibrarianDashboard from '../../components/librarian-dashboard';

import BookRow from '../../components/librarian/book-row';

class BooksScreen extends Component {

  constructor(props) {
    super(props);
    
    this.books = [
      {
        created_at: '11/11/11',
        title: 'The best book',
        author: 'Byron Jimenez',
        published_year: '2021',
        genre: 'Suspense' 
      },
      {
        created_at: '11/11/11',
        title: 'The best book',
        author: 'Byron Jimenez',
        published_year: '2021',
        genre: 'Suspense' 
      },
      {
        created_at: '11/11/11',
        title: 'The best book',
        author: 'Byron Jimenez',
        published_year: '2021',
        genre: 'Suspense' 
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
                    <h2 className='text-white'>All registered books</h2>
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
                  <div className="card-header">
                    <Link to='/book/add' className='btn btn-success' >Add book</Link>
                  </div>
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
                            <th className="text-center" scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <BookRow books={this.books}/>
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
 
export default BooksScreen;