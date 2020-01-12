import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import authService from './services/authService';

import './App.css';
import Login from './views/login';
import Home from './views/home';
import Logout from './components/logout';

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
        <Route path="/logout" component={Logout}/>
        <Route path="/login" component={Login} /> 
        <Route path="/"  render={props => <Home {...props} user={user}/>}></Route>
      </Switch>
    );
  }
}

export default App;
