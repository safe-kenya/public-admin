import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* begin:: Page */}
        {/* begin:: Header Mobile */}
        <Navbar />
        {/* end:: Header Mobile */}
      </div>
    );
  }
}

export default App;
