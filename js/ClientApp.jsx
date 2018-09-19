import React from "react";
import { render } from "react-dom";

const App = function() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <h3>
        Welcome to my React boilerplate <br /> with webpack, webpack-dev-server,
        babel, eslint, prettier
      </h3>
    </div>
  );
};

render(<App />, document.getElementById("app"));
