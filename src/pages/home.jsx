
  
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { history } from '../helpers/history';
import { clearMessage } from "../actions/message";

import LibrarianDashboard from '../components/librarian-dashboard'
import StudentDashboard from '../components/student-dashboard'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      showLibrarianDash: false,
      showStudentDash: false,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showLibrarianDash: user.role_name === 'librarian',
        showStudentDash: user.role_name === 'student',
      });
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }

    const { currentUser, showLibrarianDash, showStudentDash } = this.state;

    return (
      <div className="container">
        {showLibrarianDash && (
          <LibrarianDashboard/>
        )}
        {showStudentDash && (
          <StudentDashboard/>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn, user } = state.auth;
  return {
    isLoggedIn,
    user
  };
}

export default connect(mapStateToProps)(Home);