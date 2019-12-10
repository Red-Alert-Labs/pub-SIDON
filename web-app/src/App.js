import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import Login from './views/login';
import Home from './views/home';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} /> 
      <Route path="/" component={Home}></Route>
    </Switch>
  );
}

export default App;
