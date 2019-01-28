import React from 'react';
import {WelcomePage, ErrorPage} from './pages';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/404" component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}