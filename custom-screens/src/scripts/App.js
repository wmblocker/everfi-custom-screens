import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <SideNav />
      <MainContainer />
      <Footer />
      </div>
    );
  }
}

export default App;
