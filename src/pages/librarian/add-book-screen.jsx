import React, { Component } from 'react';

import LibrarianDashboard from '../../components/librarian-dashboard';
import bookService from '../../services/book.service';

class AddBookScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      published_year: 2000,
      genre: '',
      stock: 0,
      success: false,
      message: ''
      
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    bookService.storeBook({
      title: this.state.title,
      author: this.state.author,
      published_year: this.state.published_year,
      genre: this.state.genre,
      stock: this.state.stock
    })
      .then(response => {
        console.log(response);
        document.getElementById("create-book-form").reset();
        this.setState({
          title: '',
          author: '',
          published_year: 2000,
          genre: '',
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
          {this.state.message && (
            <div className="form-group mb-4">
              <div className={`alert ${this.state.success ? 'alert-success' : 'alert-danger'}`} role="alert">
                {this.state.message}
              </div>
            </div>
          )}
          <form onSubmit={this.handleSubmit} id="create-book-form">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" name='title' value={this.state.title} onChange={this.handleInputChange}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Author</label>
              <input type="text" className="form-control" name='author' value={this.state.author} onChange={this.handleInputChange}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Published year</label>
              <input type="number" className="form-control" name= 'published_year' value={this.state.published_year} onChange={this.handleInputChange}/>
            </div>
            <div className='mb-3'>
              <label className="form-label">Genre</label>
              <input type="text" className="form-control" name='genre' value={this.state.genre} onChange={this.handleInputChange}/>
            </div>
            <div className='mb-5'>
              <label className="form-label">Stock</label>
              <input type="number" min="0" className="form-control" name='stock' value={this.state.stock} onChange={this.handleInputChange}/>
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