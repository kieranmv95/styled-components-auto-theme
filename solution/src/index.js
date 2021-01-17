import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages";

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}

var container = document.getElementById("app");
ReactDOM.render(<App />, container);