import "./css/App.scss";
import React, { useState } from "react";
import Login from './screens/Login'
import Home from './screens/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <div className="main-container-size login">
      <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
      </Switch>
     </Router>
    </div>
  );
};

export default App;
