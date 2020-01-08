import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import authService from './services/authService';

import './App.css';
import Login from './views/login';
import Home from './views/home';

class App extends Component {
  state = {};

  componentDidMount() {
    const user = authService.getCurrentUser();
    this.setState({user});
  }
  render(){
    
    const {user} = this.state;

    return (
      <Switch>
        <Route path="/login" component={Login} /> 
        <Route path="/" component={Home}></Route>
      </Switch>
    );
  }
}

export default App;
