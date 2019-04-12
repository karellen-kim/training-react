import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HookBasic from "./hook/HookBasic";
import {ThemedPage} from "./context/ThemedPage";

export const App = () => (
  <Router>
    <>
      <div className="navibar">
        <Link to="/hook">Hook</Link>
        <Link to="/context">Context</Link>
      </div>
      <div className="content">
          <Route path="/" exact component={() => <div></div>}/>
          <Route path="/hook" component={HookBasic}/>
          <Route path="/context" component={ThemedPage}/>
      </div>
    </>
  </Router>
);
