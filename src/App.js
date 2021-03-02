import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route path="/about">
              <h1>This is a homepage</h1>
            </Route>
            <Route path="/users">
              <h1>This is a homepage</h1>
            </Route>
            <Route exact path="/">
              <Header />
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
