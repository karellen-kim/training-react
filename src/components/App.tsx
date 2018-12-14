import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HookBasic from "./hook/HookBasic";

export const App = () => (
  <Router>
    <>
      <div>
        <Link to="/hook">Hook</Link>
      </div>
      <Route path="/" exact component={() => <div></div>}/>
      <Route path="/hook" component={HookBasic}/>
    </>
  </Router>
);
