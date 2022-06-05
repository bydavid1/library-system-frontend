import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LibrarianDashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <Link to='/' className="nav-link px-2 text-white">Home</Link>
                <Link to='/borrowings' className="nav-link px-2 text-white">Requests</Link>
                <Link to='/users' className="nav-link px-2 text-white">Users</Link>
                <Link to='/books' className="nav-link px-2 text-white">Books</Link>
              </ul>
              <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">Logout</button>
              </div>
            </div>
          </div>
        </header>
        <div className="container mt-4">
          {this.props.children}
        </div>
      </div>
    );
  }
}
