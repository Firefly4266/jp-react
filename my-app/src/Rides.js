import React, { Component } from 'react';

class Ride extends Component{

    state = {
        make: null,
        model: null,
        year: null
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <label htmlFor='make'>Make</label>
                    <input type='text' id='make' onChange= { this.handleChange } />
                </form>
            </div>
        )
    }
}

export default Ride