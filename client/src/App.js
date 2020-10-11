import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Authorization from './containers/Authorization';
import Home from './containers/Home';


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/authorization' exact={true} component={Authorization} />
        </Switch>
      </Router>
    )
  }
} 
//<Route path='/posts' exact={true} component={PostList}/>
export default App;