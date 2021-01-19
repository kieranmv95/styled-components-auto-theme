import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

var container = document.getElementById("app");
ReactDOM.render(<App />, container);