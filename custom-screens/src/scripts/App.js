import React, { Component } from 'react';
import NavBar from "./components/NavBar.js";
import Main from "./components/Main.js"
import Footer from "./components/Footer.js";
import '../css/App.css';
import {Router, Route, Link, Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <NavBar className="row"/> 
      <BrowserRouter>
      <Main />
      </BrowserRouter>
      <Footer className="row" />
      </div>
    );
  }
}

export default App;
