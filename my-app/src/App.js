import React, { Component } from 'react';
import Customers from "./Customers";
import AddCustomer from "./AddCustomer";

// now we add props to the Customers component
class App extends Component {
  state = { 
    customers : [
      { name: 'Jp', age: 54, ride: 'Spider', id: 1 },
      { name: 'Dog', age: 51, ride: 'Bmw', id: 2 },
      { name: 'Tracey', age: 30, ride: 'Tesla', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
          <h1>Reaction Time!</h1>
          <p> Welcome hommies...what's good!?? </p>
          <Customers customers={this.state.customers} />
          <AddCustomer />
      </div>
    );
  }
}

export default App;
