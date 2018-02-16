import React, { Component } from 'react';
import NavBar from "./components/NavBar.js";
import SideNav from "./components/SideNav.js"
import Main from "./components/Main.js"
import Footer from "./components/Footer.js";
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App" className="container-fluid">

      <NavBar className="row"/>
      <div className="row">
        <SideNav />
        <Main />
      </div>
      <Footer className="row" />
      </div>
    );
  }
}

export default App;
