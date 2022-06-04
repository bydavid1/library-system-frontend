
import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Router, Switch, Route,} from 'react-router-dom'

import Login from './pages/login'
import Home from './pages/home'

import { history } from './helpers/history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
