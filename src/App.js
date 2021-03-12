import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Subject from "./components/Subject";
import Watch from "./components/Watch";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* {location.pathame.includes("watch") && <Nav />} */}
        <Nav />
        <Route path="/" component={Home} exact />
        <Route path="/subject/:name" component={Subject} exact />
        <Route path="/subject/:name/watch" component={Watch} exact />
      </div>
    </Router>
  );
}

export default App;
