import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from "./Hello";

export const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Hello} />
    </div>
  </Router>
);
