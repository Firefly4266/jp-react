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

  addCustomer = (customer)=>{
    customer.id= Math.random;
    let customers = [...this.state.customers, customer]
    this.setState(
      {
        customers: customers
      }
    )
  }

  deleteCustomer = (id)=>{
    console.log(id);
  }

  render() {
    return (
      <div className="App">
          <h1>Reaction Time!</h1>
          <p> Welcome hommies...what's good!?? </p>
          <Customers deleteCustomer={ this.deleteCustomer } customers={this.state.customers} />
          <AddCustomer addCustomer= {this.addCustomer} />
          
      </div>
    );
  }
}

export default App;
