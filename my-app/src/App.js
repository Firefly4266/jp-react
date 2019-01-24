import React, { Component } from 'react';
import Customers from "./Customers";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Reaction Time!</h1>
          <p> Welcome hommies...what's good!?? </p>
          <Customers />
      </div>
    );
  }
}

export default App;
