import React, { Component } from 'react';

import LibrarianDashboard from '../../components/librarian-dashboard';

class AddBookScreen extends Component {
  
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack(){
      this.props.history.goBack();
  }

  render() { 
    return (
      <LibrarianDashboard>
        <div className='card'>
          <div className='card-header'>
            <h5>Register new book</h5>
          </div>
          <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Author</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Published year</label>
              <input type="number" className="form-control"/>
            </div>
            <div className='mb-5'>
              <label className="form-label">Genre</label>
              <input type="text" className="form-control"/>
            </div>
            <div className='row'>
              <div className="col">
                <button type="submit" className="btn btn-primary me-3">Save</button>
                <button type="button" className="btn btn-secondary" onClick={this.goBack}>Go back</button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </LibrarianDashboard>
    );
  }
}
 
export default AddBookScreen;