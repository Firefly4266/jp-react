import React, { Component } from 'react';

class Customers extends Component{
    render(){
        console.log(this.props);
        return(
            <div className="customers">
                <div>{ this.props.name }</div>
                <div>{ this.props.age }</div>
                <div>{ this.props.ride }</div>
            </div>
        )
    }
}

export default Customers;
