import React, { Component } from 'react';

class Customers extends Component{
    render(){
        const { customers } = this.props;
        const customerList = customers.map(customer =>{
            return(
                <div className="customers" key= { customer.id }>
                    <div>{ customer.name }</div>
                    <div>{ customer.age }</div>
                    <div>{ customer.ride }</div>
                </div>
            );
        
        })
        return( 
            <div className='customerList'>
                    <div>{ customerList }</div>
            </div>
        )
    }
}

export default Customers;
