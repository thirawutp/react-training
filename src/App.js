import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import './app.scss'

import Header from './components/Header'
import ListPage from './pages/ListPage'
import FormPage from './pages/FormPage'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Header} >
          <IndexRoute component={ListPage} />
          <Route path='form' component={FormPage} />
        </Route>
      </Router>
    );
  }
}

export default App;
