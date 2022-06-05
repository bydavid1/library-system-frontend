import React, { Component } from 'react';
import LibrarianDashboard from '../../components/librarian-dashboard';

class AddUserScreen extends Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
      this.props.history.goBack();
  }

  render() { 
    return (
      <LibrarianDashboard>
        <div className='card'>
          <div className='card-header'>
            <h5>Register new user</h5>
          </div>
          <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">First name</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Last name</label>
              <input type="text" className="form-control"/>
            </div>
            <div className='mb-5'>
            <label className="form-label">Role</label>
              <select className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='row'>
              <div className="col">
                <button type="submit" className="btn btn-primary me-3">Submit</button>
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
 
export default AddUserScreen;