import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from "./Hello";
import hookExample from "./hook/hookExample";

export const App = () => (
  <div>
    <hookExample />
  </div>
);
