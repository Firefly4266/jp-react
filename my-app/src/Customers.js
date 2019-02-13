import React from 'react';

const Customers = ({ customers, deleteCustomer })=>{
    const customerList = customers.map(customer =>{
        return(
            <div className="customers" key= { customer.id }>
                <div>{ customer.name }</div>
                <div>{ customer.age }</div>
                <div>{ customer.ride }</div>
                <button onClick= {()=>{ deleteCustomer(customer.id)}}>Delete Customer</button>
            </div>
        );
    })
    return( 
        <div className='customerList'>
                <div>{ customerList }</div>
        </div>
    )
}


export default Customers;
