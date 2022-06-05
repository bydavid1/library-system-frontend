
import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Router, Switch, Route,} from 'react-router-dom'

import Login from './pages/login'
import Home from './pages/home'
import BorrowingsScreen from './pages/librarian/borrowings-screen'
import UsersScreen from './pages/librarian/users-screen'
import AddUserScreen from "./pages/librarian/add-user";
import BooksScreen from "./pages/librarian/books-screen";
import AddBookScreen from "./pages/librarian/add-book";

import { history } from './helpers/history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/borrowings" component={BorrowingsScreen} />
              <Route exact path="/users" component={UsersScreen} />
              <Route exact path="/user/add" component={AddUserScreen} />
              <Route exact path="/books" component={BooksScreen} />
              <Route exact path="/book/add" component={AddBookScreen} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
