import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import './App.css';
import Login from './views/login';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Redirect from="/" exact to="/not-found" />
    </Switch>
  );
}

export default App;
