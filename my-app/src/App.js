import React, { Component } from 'react';
import Customers from "./Customers";

// now we add props to the Customers component
class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Reaction Time!</h1>
          <p> Welcome hommies...what's good!?? </p>
          <Customers name= 'Jp' age= '54' ride= 'Spider'/>
      </div>
    );
  }
}

export default App;
