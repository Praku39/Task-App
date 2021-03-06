 
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import HomePage from '../modules/HomePage/Home';
import Add from '../modules/Add/Add';
import Edit from '../modules/Edit/Edit';
import history from './history';

class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
          <Router history={history}>
              <Switch>
                <Route exact path={'/'} component={HomePage} />
                <Route path={'/add'} component={Add} />
                <Route path={'/edit'} component={Edit} />
              </Switch>
          </Router>
        </BrowserRouter>
    );
  }
}

export default Routes;