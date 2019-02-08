import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component { 
    state = {
        posts: []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=> {
            console.log(res)
            this.setState({
               posts: res.data
            })
        })
    }
    render() {
        const {posts} = this.state;
        return(
            <div className="container">
                <h4 className="center">Home</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eius iure distinctio minus, esse quis! Recusandae debitis, sed molestias a ex porro deserunt facere quos, necessitatibus impedit dignissimos vel. Explicabo.</p>
            </div> 
        )
    } 
}

export default Home