
  
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    //logic here
  }

  render() {
    const { isLoggedIn } = this.props;

    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <header className="jumbotron">
          
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  return {
    isLoggedIn
  };
}

export default connect(mapStateToProps)(Home);