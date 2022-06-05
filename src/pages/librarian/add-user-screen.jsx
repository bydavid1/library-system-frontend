import React, { Component } from 'react';
import LibrarianDashboard from '../../components/librarian-dashboard';
import userService from '../../services/user.service';

class AddUserScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      roles: [],
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      role_id: null,
      success: false,
      message: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    userService.storeUser({
      email: this.state.email,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      role_id: this.state.role_id,
    })
      .then(response => {
        console.log(response);
        document.getElementById("create-user-form").reset();
        this.setState({
          email: '',
          password: '',
          first_name: '',
          last_name: '',
          role_id: null,
          success: true,
          message: response.data.message ?? 'Created successfully'
        });
      }).catch(error => {
        console.log(error);
        this.setState({
          success: false,
          message: (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        });
      })
  }

  goBack() {
      this.props.history.goBack();
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    userService.getRoles()
      .then(response => {
        this.setState({
          roles: response.data
        })
      }).catch(error => {
        this.setState({
          message:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      });
  }

  render() { 
    return (
      <LibrarianDashboard>
        <div className='card'>
          <div className='card-header'>
            <h5>Register new user</h5>
          </div>
          <div className="card-body">
          {this.state.message && (
            <div className="form-group mb-4">
              <div className={`alert ${this.state.success ? 'alert-success' : 'alert-danger'}`} role="alert">
                {this.state.message}
              </div>
            </div>
          )}
          <form onSubmit={this.handleSubmit} id="create-user-form">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" name='email' value={this.state.email}  onChange={this.handleInputChange}/>
              <div id="emailHelp" className="form-text">Email is only used for auth purposes.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">First name</label>
              <input type="text" className="form-control" name='first_name' value={this.state.first_name}  onChange={this.handleInputChange}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Last name</label>
              <input type="text" className="form-control" name='last_name' value={this.state.last_name}  onChange={this.handleInputChange}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" name='password' value={this.state.password}  onChange={this.handleInputChange}/>
            </div>
            <div className='mb-5'>
            <label className="form-label">Role</label>
              <select className="form-select" name='role_id' placeholder='Select user role' onChange={this.handleInputChange}>
                {
                  this.state.roles.map((role, index) => {
                    return <option value={role.id} key={index}>{role.role_name}</option>
                  })
                }
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