import React, { Component } from 'react';

class Customers extends Component{
    render(){
        //console.log(this.props);
        const { name, age, ride } = this.props;
        return(
            <div className="customers">
                <div>{ name }</div>
                <div>{ age }</div>
                <div>{ ride }</div>
            </div>
        )
    }
}

export default Customers;
