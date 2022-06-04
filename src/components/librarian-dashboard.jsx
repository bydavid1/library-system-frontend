import React, { Component } from "react";

export default class LibrarianDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    // logic here
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Librarian dashboard</h3>
        </header>
      </div>
    );
  }
}
