import React, { Component } from 'react';

class AddTask extends Component{

    state = {
        content: ''
    }

    handleChange = (e)=>{
        this.setState({
            content : e.target.value   
        })
    }

    handleSubmit= (e)=>{
        e.preventDefault();
        this.props.addTask(this.state);
        //set content to empty string so it resets after submit
        this.setState({
            content : ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <label>Add Task</label>
                    {/* add value property and set it to the state.content which is an empty string */}
                    <input type="text" onChange= {this.handleChange} value= {this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTask;