import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from "./Components/search_bar";

const API_KEY = "AIzaSyD05vrSVVzlt_Mtl1jHsXd5rCgX0viytAg";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".container"));